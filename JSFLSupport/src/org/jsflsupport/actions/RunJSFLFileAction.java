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
package org.jsflsupport.actions;

import com.intellij.openapi.actionSystem.AnAction;
import com.intellij.openapi.actionSystem.AnActionEvent;
import com.intellij.openapi.actionSystem.PlatformDataKeys;
import com.intellij.openapi.vfs.VirtualFile;
import org.jsflsupport.JSFLFileType;

import java.awt.*;
import java.io.File;
import java.io.IOException;

public class RunJSFLFileAction extends AnAction {

    @Override
    public void actionPerformed(AnActionEvent _anActionEvent) {
        VirtualFile file = _anActionEvent.getData(PlatformDataKeys.VIRTUAL_FILE);
        if (file != null && file.getFileType() instanceof JSFLFileType) {
            try {
                Desktop.getDesktop().open(new File(file.getPath()));
            } catch (IOException e) {
                e.getStackTrace();
            }
        }
    }

    @Override
    public void update(AnActionEvent e) {
        VirtualFile file = e.getData(PlatformDataKeys.VIRTUAL_FILE);
        boolean enabled = file != null && file.getFileType() instanceof JSFLFileType;
        e.getPresentation().setEnabled(enabled);
        e.getPresentation().setVisible(enabled);
    }
}
