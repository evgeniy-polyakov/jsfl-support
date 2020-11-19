package org.jsflsupport;

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
