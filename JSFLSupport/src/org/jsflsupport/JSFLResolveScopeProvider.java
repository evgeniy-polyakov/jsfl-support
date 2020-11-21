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
package org.jsflsupport;

import com.intellij.lang.javascript.psi.resolve.JavaScriptResolveScopeProvider;
import com.intellij.openapi.module.Module;
import com.intellij.openapi.project.Project;
import com.intellij.openapi.vfs.VirtualFile;
import com.intellij.psi.search.GlobalSearchScope;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

public class JSFLResolveScopeProvider extends JavaScriptResolveScopeProvider {

    public JSFLResolveScopeProvider() {
    }

    @Nullable
    public GlobalSearchScope getResolveScope(@NotNull VirtualFile file, Project project) {
        if (!isApplicable(file)) {
            return null;
        } else if (!isJSFL(file)) {
            return null;
        }
        GlobalSearchScope scope = super.getResolveScope(file, project);
        if (scope == null) {
            return null;
        }
        scope = scope.intersectWith(jsflSearchScope);
        return scope;
    }

    private static boolean isJSFL(@NotNull VirtualFile file) {
        return file.getFileType() instanceof JSFLFileType;
    }

    private static final GlobalSearchScope jsflSearchScope = new GlobalSearchScope() {

        @Override
        public boolean isSearchInModuleContent(@NotNull Module module) {
            return true;
        }

        @Override
        public boolean isSearchInLibraries() {
            return true;
        }

        @Override
        public boolean contains(@NotNull VirtualFile virtualFile) {
            return virtualFile.isDirectory() || virtualFile.getFileType() instanceof JSFLFileType ||
                    virtualFile.getName().startsWith("lib.es");
        }
    };
}
