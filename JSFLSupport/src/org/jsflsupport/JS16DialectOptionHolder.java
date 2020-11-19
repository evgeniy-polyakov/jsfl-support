package org.jsflsupport;

import com.intellij.lang.javascript.DialectOptionHolder;
import org.jetbrains.annotations.Nullable;

import java.io.Reader;
import java.lang.reflect.Constructor;

public class JS16DialectOptionHolder extends DialectOptionHolder {

    public JS16DialectOptionHolder() {
        super("JS_1_6");
    }

    @Nullable
    @Override
    protected Constructor<?> findLexerClass() {
        try {
            return com.intellij.lang.javascript._JS_1_8Lexer.class.getConstructor(Reader.class, Boolean.TYPE);
        } catch (NoSuchMethodException e) {
            throw new RuntimeException(e);
        }
    }
}
