package org.jsflsupport;

import com.intellij.openapi.project.Project;
import com.intellij.openapi.vfs.VirtualFile;
import com.intellij.psi.PsiFile;
import com.intellij.psi.PsiManager;
import com.intellij.psi.ResolveScopeEnlarger;
import com.intellij.psi.search.LocalSearchScope;
import com.intellij.psi.search.SearchScope;
import org.jetbrains.annotations.NotNull;

import java.util.HashSet;
import java.util.Iterator;
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
public class JSFLPredefinedLibraryScopeEnlarger extends ResolveScopeEnlarger {

    public SearchScope getAdditionalResolveScope(@NotNull VirtualFile virtualFile, Project project) {
        if (virtualFile.getFileType() instanceof JSFLFileType) {
            JSFLPredefinedLibraryProvider provider = new JSFLPredefinedLibraryProvider();
            Iterator<VirtualFile> iterator = provider.getRequiredLibraryFiles().iterator();
            Set<PsiFile> psiFiles = new HashSet<PsiFile>();
            while (iterator.hasNext()) {
                PsiFile psiFile = PsiManager.getInstance(project).findFile(iterator.next());
                if (psiFile != null) {
                    psiFiles.add(psiFile);
                }
            }
            if (psiFiles.size() > 0) {
                return new LocalSearchScope(psiFiles.toArray(new PsiFile[psiFiles.size()]));
            }
        }
        return null;
    }
}
