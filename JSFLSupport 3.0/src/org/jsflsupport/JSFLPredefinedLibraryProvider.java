package org.jsflsupport;

import com.intellij.lang.javascript.library.JSPredefinedLibraryProvider;
import com.intellij.openapi.project.Project;
import com.intellij.openapi.vfs.VfsUtil;
import com.intellij.openapi.vfs.VirtualFile;
import com.intellij.webcore.libraries.ScriptingLibraryModel;
import org.jetbrains.annotations.NotNull;

import java.net.URL;
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
public class JSFLPredefinedLibraryProvider extends JSPredefinedLibraryProvider {

    private static final String NAME = "JSFL";

    private static final String[] FILES = {
            "/org/jsflsupport/libraries/Document.jsfl",
            "/org/jsflsupport/libraries/Drawing.jsfl",
            "/org/jsflsupport/libraries/Elements.jsfl",
            "/org/jsflsupport/libraries/Geom.jsfl",
            "/org/jsflsupport/libraries/Items.jsfl",
            "/org/jsflsupport/libraries/Timeline.jsfl",
            "/org/jsflsupport/libraries/TopLevel.jsfl"
    };

    @NotNull
    @Override
    public ScriptingLibraryModel[] getPredefinedLibraries(@NotNull Project project) {
        Set<VirtualFile> libFiles = getFiles();
        return new ScriptingLibraryModel[]{
                ScriptingLibraryModel.createPredefinedLibrary(NAME,
                                                              libFiles.toArray(new VirtualFile[0]),
                                                              true)};
    }

    @NotNull
    @Override
    public Set<VirtualFile> getRequiredLibraryFilesForResolve(@NotNull Project project) {
        return getFiles();
    }

    public static Set<VirtualFile> getFiles() {
        Set<VirtualFile> libFiles = new HashSet<>();
        for (String fileName : FILES) {
            VirtualFile file = getPredefinedLibFile(fileName);
            if (file != null)
                libFiles.add(file);
        }
        return libFiles;
    }

    private static VirtualFile getPredefinedLibFile(String libFileName) {
        URL libFileUrl = JSFLPredefinedLibraryProvider.class.getResource(libFileName);
        return VfsUtil.findFileByURL(libFileUrl);
    }
}