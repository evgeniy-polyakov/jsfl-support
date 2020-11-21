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
package org.jsflsupport.lang;

import com.intellij.lang.DependentLanguage;
import com.intellij.lang.javascript.JSLanguageDialect;
import com.intellij.lang.javascript.JavascriptLanguage;
import org.jetbrains.annotations.NotNull;

public class JS16LanguageDialect extends JSLanguageDialect implements DependentLanguage {

    public JS16LanguageDialect() {
        super("JavaScript 1.6", JS16SupportLoader.DIALECT_OPTION_HOLDER);
    }

    public boolean isAtLeast(@NotNull JSLanguageDialect other) {
        return super.isAtLeast(other) || JavascriptLanguage.INSTANCE.isAtLeast(other);
    }
}
