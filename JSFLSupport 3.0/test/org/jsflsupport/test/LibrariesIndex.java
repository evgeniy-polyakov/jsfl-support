package org.jsflsupport.test;

import java.io.BufferedReader;
import java.io.FileReader;
import java.util.ArrayList;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

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
public class LibrariesIndex extends ArrayList<String> {

    public LibrariesIndex() {
        String[] libraries = {
                "src/org/jsflsupport/libraries/JSFLDocument.js",
                "src/org/jsflsupport/libraries/JSFLDrawing.js",
                "src/org/jsflsupport/libraries/JSFLElements.js",
                "src/org/jsflsupport/libraries/JSFLGeom.js",
                "src/org/jsflsupport/libraries/JSFLItems.js",
                "src/org/jsflsupport/libraries/JSFLTimeline.js",
                "src/org/jsflsupport/libraries/JSFLTopLevel.js"
        };
        BufferedReader reader;
        Pattern classRe = Pattern.compile("^(\\w+)\\s*=\\s*function");
        Pattern instanceRe = Pattern.compile("^(\\w+)\\s*=\\s*new\\s+");
        Pattern fieldRe = Pattern.compile("^(\\w+)\\.prototype\\.(\\w+)");
        for (String library : libraries) {
            try {
                reader = new BufferedReader(new FileReader(library));
                String line;
                Matcher matcher;
                while ((line = reader.readLine()) != null) {
                    matcher = classRe.matcher(line);
                    if (matcher.find()) {
                        this.add(matcher.group(1));
                    }
                    matcher = instanceRe.matcher(line);
                    if (matcher.find()) {
                        this.add(matcher.group(1));
                    }
                    matcher = fieldRe.matcher(line);
                    if (matcher.find()) {
                        this.add(matcher.group(1) + '.' + matcher.group(2));
                    }
                }
                reader.close();
            } catch (Exception e) {
                e.printStackTrace();
            }
        }
    }
}
