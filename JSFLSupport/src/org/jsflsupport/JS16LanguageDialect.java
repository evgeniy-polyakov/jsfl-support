package org.jsflsupport;

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
