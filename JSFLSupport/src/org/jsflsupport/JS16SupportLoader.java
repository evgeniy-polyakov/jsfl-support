package org.jsflsupport;

import com.intellij.lang.javascript.DialectOptionHolder;
import com.intellij.lang.javascript.JSLanguageDialect;
import com.intellij.lang.javascript.JavascriptParserDefinition;
import com.intellij.lang.javascript.types.JSFileElementType;

public interface JS16SupportLoader {
    DialectOptionHolder DIALECT_OPTION_HOLDER = new JS16DialectOptionHolder();
    JSLanguageDialect LANGUAGE_DIALECT = new JS16LanguageDialect();
    JSFileElementType FILE_ELEMENT_TYPE = JSFileElementType.create(JS16SupportLoader.LANGUAGE_DIALECT);
    JavascriptParserDefinition PARSER_DEFINITION = new JS16ParserDefinition();
}
