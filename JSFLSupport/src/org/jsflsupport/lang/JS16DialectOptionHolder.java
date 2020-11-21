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
