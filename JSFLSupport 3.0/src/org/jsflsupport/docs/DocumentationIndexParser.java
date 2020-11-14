package org.jsflsupport.docs;

import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.apache.commons.lang.ArrayUtils;
import org.apache.commons.lang.StringUtils;

import java.io.FileWriter;
import java.io.IOException;
import java.net.URL;

public class DocumentationIndexParser {

    public static void main(String[] args) {
        String url = "https://raw.githubusercontent.com/AdobeDocs/developers-animatesdk-docs/master/manifest-JSFL-reference.json";
        try {
            ObjectMapper mapper = new ObjectMapper();
            mapper.configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false);
            DocumentationIndexJson index = mapper.readValue(new URL(url), DocumentationIndexJson.class);
            FileWriter fileWriter = new FileWriter("JSFLSupport 3.0/src/org/jsflsupport/docs/docs.properties");

            // Iterate all chapters except of first and last
            for (int i = 1; i < index.pages.length - 1; i++) {
                DocumentationIndexJson chapter = index.pages[i];
                String chapterObject = null;
                // Iterate all pages in the chapter
                for (DocumentationIndexJson page : chapter.pages) {

                    String key = page.title;
                    if (key.contains("Top-level")) {
                        chapterObject = "";
                        continue;
                    }
                    if (key.contains("layerParenting summary")) {
                        chapterObject = "Layer";
                        continue;
                    }

                    key = key.replaceAll("\\s+summary", "");
                    key = key.replaceAll("\\s+Summary", "");
                    key = key.replaceAll("\\s+object", "");
                    key = key.replaceAll("\\s+object\\s+Summary", "");
                    key = key.replaceAll("\\s*-\\s+dropped", "");
                    key = key.replaceAll("\\(\\s*\\)", "");
                    key = key.replaceAll("\\s*\\.\\s+", ".");

                    if (chapterObject == null) {
                        chapterObject = key;
                    } else if (!chapterObject.equals("") && !key.contains(".")) {
                        key = chapterObject + "." + key;
                    }

                    String[] lowercase = {
                            "activate",
                            "alert",
                            "configureTool",
                            "confirm",
                            "deactivate",
                            "keyDown",
                            "keyUp",
                            "mouseDoubleClick",
                            "mouseDown",
                            "mouseMove",
                            "mouseUp",
                            "notifySettingsChanged",
                            "prompt",
                            "setCursor",
                            "drawingLayer",
                            "fl"
                    };

                    if (!ArrayUtils.contains(lowercase, chapterObject) && !ArrayUtils.contains(lowercase, key)) {
                        key = StringUtils.capitalize(key);
                    }

                    key = key.replaceAll("^ComponentsPanel", "ComponentPanel");
                    key = key.replaceAll("^fl\\.", "Flash.");
                    key = key.replaceAll("^FLfile\\.", "FlashFile.");
                    key = key.replaceAll("^Math", "FlashMath");
                    key = key.replaceAll("^Xmlui", "XMLUI");

                    fileWriter.write(key + "=" + page.path + '\n');

                    if (key.equals("FLfile")) {
                        fileWriter.write("FlashFile=" + page.path + '\n');
                    }
                    if (key.equals("fl")) {
                        fileWriter.write("Flash=" + page.path + '\n');
                    }
                }
            }

            fileWriter.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    static class DocumentationIndexJson {
        public String path;
        public String title;
        public DocumentationIndexJson[] pages;

        public DocumentationIndexJson() {
        }
    }
}
