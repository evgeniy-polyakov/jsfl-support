package org.jsflsupport;

import com.intellij.ide.BrowserUtil;
import com.intellij.lang.documentation.AbstractDocumentationProvider;
import com.intellij.lang.documentation.ExternalDocumentationHandler;
import com.intellij.lang.documentation.ExternalDocumentationProvider;
import com.intellij.lang.javascript.psi.ecmal4.JSQualifiedNamedElement;
import com.intellij.openapi.project.Project;
import com.intellij.psi.PsiElement;
import com.intellij.psi.PsiManager;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import java.util.Collections;
import java.util.List;
import java.util.ResourceBundle;

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
public class JSFLDocumentationProvider extends AbstractDocumentationProvider
        implements ExternalDocumentationProvider, ExternalDocumentationHandler {

    private static String helpUrl = "https://help.adobe.com/archive/en_US/flash/cs5/flash_cs5_extending.pdf#";
    private static ResourceBundle docs = ResourceBundle.getBundle("org.jsflsupport.docs.docs");

    //region Implement ExternalDocumentationProvider to enable/disable actions
    @Nullable
    public String fetchExternalDocumentation(Project _project, PsiElement _psiElement, List<String> _list) {
        return null;
    }

    public boolean hasDocumentationFor(PsiElement element, PsiElement originalElement) {
        return false;
    }

    public boolean canPromptToConfigureDocumentation(PsiElement element) {
        return false;
    }

    public void promptToConfigureDocumentation(PsiElement element) {
    }
    //endregion

    //region Implement ExternalDocumentationHandler to perform actions
    public boolean handleExternal(PsiElement element, PsiElement originalElement) {
        String documentName = getDocumentName(element);
        if (documentName != null && docs.containsKey(documentName)) {
            BrowserUtil.browse(helpUrl + docs.getString(documentName));
            return true;
        }
        return false;
    }

    public boolean handleExternalLink(PsiManager psiManager, String link, PsiElement context) {
        return false;
    }

    public boolean canFetchDocumentationLink(String link) {
        return false;
    }

    @NotNull
    public String fetchExternalDocumentation(@NotNull String link, @Nullable PsiElement element) {
        return link;
    }
    //endregion

    @Override
    public List<String> getUrlFor(PsiElement element, PsiElement originalElement) {
        String documentName = getDocumentName(element);
        if (documentName != null && docs.containsKey(documentName)) {
            return Collections.singletonList(helpUrl + docs.getString(documentName));
        }
        return null;
    }

    private String getDocumentName(PsiElement element) {
        if (element instanceof JSQualifiedNamedElement) {
            return ((JSQualifiedNamedElement) element).getQualifiedName();
        }
        return null;
    }
}
