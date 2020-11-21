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

import com.intellij.lang.PsiBuilder;
import com.intellij.lang.javascript.JSFlexAdapter;
import com.intellij.lang.javascript.JavascriptParserDefinition;
import com.intellij.lang.javascript.parsing.JavaScriptParser;
import com.intellij.lexer.Lexer;
import com.intellij.openapi.project.Project;
import com.intellij.psi.tree.IFileElementType;
import org.jetbrains.annotations.NotNull;

public class JS16ParserDefinition extends JavascriptParserDefinition {

    public JS16ParserDefinition() {
    }

    @NotNull
    public Lexer createLexer(Project project) {
        return new JSFlexAdapter(JS16SupportLoader.DIALECT_OPTION_HOLDER);
    }

    public IFileElementType getFileNodeType() {
        return JS16SupportLoader.FILE_ELEMENT_TYPE;
    }

    @NotNull
    public JavaScriptParser<?, ?, ?, ?> createJSParser(@NotNull PsiBuilder builder) {
        return new JavaScriptParser(JS16SupportLoader.DIALECT_OPTION_HOLDER, builder);
    }
}
