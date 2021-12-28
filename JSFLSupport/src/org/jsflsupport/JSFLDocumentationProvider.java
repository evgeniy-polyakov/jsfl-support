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

import com.intellij.ide.BrowserUtil;
import com.intellij.lang.documentation.DocumentationProvider;
import com.intellij.lang.documentation.ExternalDocumentationHandler;
import com.intellij.lang.javascript.documentation.JavaScriptDocumentationProvider;
import com.intellij.lang.javascript.psi.ecmal4.JSQualifiedNamedElement;
import com.intellij.psi.PsiElement;
import org.jetbrains.annotations.Nls;
import org.jetbrains.annotations.Nullable;

import java.util.Collections;
import java.util.List;
import java.util.ResourceBundle;

public class JSFLDocumentationProvider implements DocumentationProvider, ExternalDocumentationHandler {

    private static final String helpUrl = "https://www.adobe.io/apis/creativecloud/animate/docs.html#!";
    private static final ResourceBundle docs = ResourceBundle.getBundle("org.jsflsupport.docs.docs");
    private DocumentationProvider javaScriptDocumentationProvider;

    //region Implement DocumentationProvider
    @Override
    public @Nullable
    @Nls
    String generateDoc(PsiElement element, @Nullable PsiElement originalElement) {
        String docUrl = getDocumentationUrl(element);
        if (docUrl != null) {
            if (javaScriptDocumentationProvider == null) {
                javaScriptDocumentationProvider = new JavaScriptDocumentationProvider();
            }
            String doc = javaScriptDocumentationProvider.generateDoc(element, originalElement);
            if (doc != null) {
                doc = doc.replace("AllIcons.FileTypes.JavaScript", "/org/jsflsupport/icons/jsfl.png");
                doc += "<div class=\"content\"><a href=\"" + docUrl + "\">www.adobe.io</a></div>";
                return doc;
            }
        }
        return null;
    }

    @Override
    public @Nullable
    List<String> getUrlFor(PsiElement element, PsiElement originalElement) {
        String docUrl = getDocumentationUrl(element);
        return docUrl != null ? Collections.singletonList(docUrl) : null;
    }
    //endregion

    //region Implement ExternalDocumentationHandler
    @Override
    public boolean handleExternal(PsiElement element, PsiElement originalElement) {
        String docUrl = getDocumentationUrl(element);
        if (docUrl != null) {
            BrowserUtil.browse(docUrl);
            return true;
        }
        return false;
    }
    //endregion

    private String getDocumentationUrl(PsiElement element) {
        String qualifiedName = getQualifiedName(element);
        if (qualifiedName != null && docs.containsKey(qualifiedName)) {
            return helpUrl + docs.getString(qualifiedName);
        }
        return null;
    }

    private String getQualifiedName(PsiElement element) {
        if (element instanceof JSQualifiedNamedElement) {
            return ((JSQualifiedNamedElement) element).getQualifiedName();
        }
        return null;
    }
}
