package org.jsflsupport;

import com.intellij.openapi.fileTypes.LanguageFileType;
import com.intellij.ui.IconManager;
import org.jetbrains.annotations.NotNull;
import org.jsflsupport.lang.JS16SupportLoader;

import javax.swing.*;

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
public class JSFLFileType extends LanguageFileType {

    private static final Icon ICON = IconManager.getInstance().getIcon("/org/jsflsupport/icons/jsfl.png", JSFLFileType.class);
    public static final JSFLFileType INSTANCE = new JSFLFileType();

    public JSFLFileType() {
        super(JS16SupportLoader.LANGUAGE_DIALECT);
    }

    @NotNull
    public String getName() {
        return "JSFL";
    }

    @NotNull
    public String getDescription() {
        return "JSFL Files";
    }

    @NotNull
    public String getDefaultExtension() {
        return "jsfl";
    }

    public Icon getIcon() {
        return ICON;
    }
}
