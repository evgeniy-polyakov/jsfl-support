package org.jsflsupport.actions;

import com.intellij.ide.actions.CreateFileFromTemplateAction;
import com.intellij.openapi.project.Project;
import com.intellij.psi.PsiDirectory;
import org.jsflsupport.JSFLFileType;

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
public class CreateJSFLFileAction extends CreateFileFromTemplateAction {

    public CreateJSFLFileAction() {
        super("JSFL File", "Creates a JSFL file from the specified template", JSFLFileType.INSTANCE.getIcon());
    }

    @Override
    protected void buildDialog(Project project, PsiDirectory directory,
                               com.intellij.ide.actions.CreateFileFromTemplateDialog.Builder builder) {
        builder.setTitle("New JSFL file");
        builder.addKind("JSFL Command", JSFLFileType.INSTANCE.getIcon(), "JSFL Command");
        builder.addKind("JSFL Tool", JSFLFileType.INSTANCE.getIcon(), "JSFL Tool");
    }

    @Override
    protected String getActionName(PsiDirectory directory, String newName, String templateName) {
        return new StringBuilder().append("Create JSFL file ").append(newName).toString();
    }
}
