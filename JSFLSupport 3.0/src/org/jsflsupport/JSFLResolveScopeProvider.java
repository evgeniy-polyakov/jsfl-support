package org.jsflsupport;

import com.intellij.lang.javascript.library.JSLibraryManager;
import com.intellij.lang.javascript.psi.JSFile;
import com.intellij.lang.javascript.psi.resolve.JavaScriptResolveScopeProvider;
import com.intellij.openapi.project.Project;
import com.intellij.openapi.roots.ProjectRootModificationTracker;
import com.intellij.openapi.util.Key;
import com.intellij.openapi.vfs.VirtualFile;
import com.intellij.psi.PsiFile;
import com.intellij.psi.PsiManager;
import com.intellij.psi.search.GlobalSearchScope;
import com.intellij.psi.util.CachedValueProvider;
import com.intellij.psi.util.CachedValuesManager;
import com.intellij.webcore.libraries.ScriptingLibraryModel;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import java.util.HashSet;
import java.util.Set;

/*
 * Copyright 2011 Evgeniy Polyakov
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
public class JSFLResolveScopeProvider extends JavaScriptResolveScopeProvider {

    private static final Key<Set<VirtualFile>> JSFL_PREDEFINED_LIBRARY_SCOPE_KEY = Key.create("jsfl.predefined.library.scope");

    public JSFLResolveScopeProvider() {
    }

    @Nullable
    public GlobalSearchScope getResolveScope(@NotNull VirtualFile file, Project project) {
        if (!isApplicable(file)) {
            return null;
        } else if (!useJSFLPredefinedLibrary(file, project)) {
            return null;
        }
        Set<VirtualFile> jsflPredefinedFiles = getPredefinedJSFLLibraryFiles(project);
        Set<VirtualFile> libraryFilesToExclude = (Set<VirtualFile>) CachedValuesManager.getManager(project).getCachedValue(project, () -> {
            Set<VirtualFile> result = new HashSet<VirtualFile>();
            ScriptingLibraryModel htmlLibrary = JSLibraryManager.getInstance(project).getLibraryByName("HTML");
            if (htmlLibrary != null) {
                result.addAll(htmlLibrary.getSourceFiles());
            }
            return new CachedValueProvider.Result<>(result, ProjectRootModificationTracker.getInstance(project));
        });
        return this.getProjectAndLibrariesScope(file, project, jsflPredefinedFiles, libraryFilesToExclude);
    }

    private static boolean useJSFLPredefinedLibrary(@NotNull VirtualFile file, @NotNull Project project) {
        PsiFile psiFile = PsiManager.getInstance(project).findFile(file);
        return useJSFLPredefinedLibrary(psiFile, project);
    }

    public static boolean useJSFLPredefinedLibrary(@Nullable PsiFile file, @NotNull Project project) {
        if (file instanceof JSFile && file.getFileType() == JSFLFileType.INSTANCE) return true;
        assert file != null;
        return getPredefinedJSFLLibraryFiles(project).contains(file.getOriginalFile().getVirtualFile());
    }

    @NotNull
    private static Set<VirtualFile> getPredefinedJSFLLibraryFiles(Project project) {
        Set<VirtualFile> jsflPredefinedFiles = (Set<VirtualFile>) project.getUserData(JSFL_PREDEFINED_LIBRARY_SCOPE_KEY);
        if (jsflPredefinedFiles == null) {
            jsflPredefinedFiles = JSFLPredefinedLibraryProvider.getFiles();
            project.putUserData(JSFL_PREDEFINED_LIBRARY_SCOPE_KEY, jsflPredefinedFiles);
        }
        return jsflPredefinedFiles;
    }
}
