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

import com.intellij.lang.javascript.DialectOptionHolder;
import com.intellij.lang.javascript.JSLanguageDialect;
import com.intellij.lang.javascript.types.JSFileElementType;

public interface JS16SupportLoader {
    DialectOptionHolder DIALECT_OPTION_HOLDER = new JS16DialectOptionHolder();
    JSLanguageDialect LANGUAGE_DIALECT = new JS16LanguageDialect();
    JSFileElementType FILE_ELEMENT_TYPE = JSFileElementType.create(JS16SupportLoader.LANGUAGE_DIALECT);
}
