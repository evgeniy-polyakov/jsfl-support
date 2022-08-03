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
package org.jsflsupport.test;

import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.junit.runners.Parameterized;
import org.junit.runners.Parameterized.Parameters;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.URL;
import java.net.URLConnection;
import java.util.*;

@RunWith(Parameterized.class)
public class TestDocumentationAvailability {

    @Parameters(name = "{0}")
    public static Collection<Object[]> getTestData() {
        ResourceBundle resource = ResourceBundle.getBundle("org.jsflsupport.docs.docs");
        List<Object[]> parameters = new ArrayList<Object[]>();
        for (String key : Collections.list(resource.getKeys())) {
            parameters.add(new Object[]{key, resource.getString(key)});
        }
        return parameters;
    }

    private static Map<String, String> exceptions = new HashMap<String, String>();

    static {
        exceptions.put("ComponentPanel", "componentsPanel");
        exceptions.put("Rectangle.", "RectangleObject.");
        exceptions.put("Oval.", "OvalObject.");
        exceptions.put("Document.setStageVanishPoint", "document.setStageVanishingPoint");
        exceptions.put("Flash.", "fl.");
        exceptions.put("FlashMath", "Math");
        exceptions.put("FlashFile", "FLfile");
        exceptions.put("Camera.", "(Camera.)?");
    }

    private String _pluginDocKey;
    private String _docIdentifier;

    public TestDocumentationAvailability(String pluginDocKey, String docIdentifier) {
        _pluginDocKey = pluginDocKey;
        _docIdentifier = docIdentifier;
    }

    @Test
    public void testMethod() {
        try {
            URL url = new URL("https://raw.githubusercontent.com/AdobeDocs/developers-animatesdk-docs/master/" + _docIdentifier);
            URLConnection connection = url.openConnection();
            String redirect = connection.getHeaderField("Location");
            if (redirect != null) {
                connection = new URL(redirect).openConnection();
            }
            BufferedReader reader = new BufferedReader(new InputStreamReader(connection.getInputStream()));
            StringBuilder builder = new StringBuilder();
            String line;
            try {
                while ((line = reader.readLine()) != null) {

                    String remoteDocKey = _pluginDocKey;
                    for (String exceptionKey : exceptions.keySet()) {
                        if (remoteDocKey.startsWith(exceptionKey)) {
                            remoteDocKey = exceptions.get(exceptionKey) + remoteDocKey.substring(exceptionKey.length());
                            break;
                        }
                    }

                    String re = "##\\s*" + remoteDocKey.toLowerCase().replace(".", "\\s*\\.\\s*") + ".*";
                    if (line.toLowerCase().matches(re)) {
                        Assert.assertTrue(line, true);
                        return;
                    }

                    builder.append(line);
                    builder.append('\n');
                }
            } finally {
                reader.close();
            }

            Assert.fail(builder.toString());

        } catch (Exception e) {
            Assert.fail(e.getMessage());
        }
    }
}
