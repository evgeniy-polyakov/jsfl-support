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

import com.intellij.lang.javascript.JSLanguageDialect;
import com.intellij.lang.javascript.JavascriptLanguage;
import com.intellij.lang.javascript.types.JavaScriptDialectFileType;
import com.intellij.openapi.fileTypes.LanguageFileType;
import com.intellij.openapi.util.IconLoader;
import com.intellij.ui.NewUI;
import org.jetbrains.annotations.NotNull;

import javax.swing.*;

public class JSFLFileType extends LanguageFileType implements JavaScriptDialectFileType {

    private static final Icon ICON = IconLoader.getIcon(
            NewUI.isEnabled() ? "/org/jsflsupport/icons/expui/jsfl.svg" : "/org/jsflsupport/icons/jsfl.svg",
            JSFLFileType.class.getClassLoader());
    public static final JSFLFileType INSTANCE = new JSFLFileType();

    public JSFLFileType() {
        super(JavascriptLanguage.INSTANCE);
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

    @NotNull
    @Override
    public JSLanguageDialect getDefaultLanguage() {
        return JavascriptLanguage.INSTANCE;
    }
}
