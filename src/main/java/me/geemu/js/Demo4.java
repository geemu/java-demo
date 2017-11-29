package me.geemu.js;

import javax.script.Invocable;
import javax.script.ScriptEngine;
import javax.script.ScriptEngineManager;
import java.io.FileReader;

/**
 * @author geemu
 * Email：cfmmail@sina.com
 * Date：2017/11/28 16:43
 * Despriction：me.geemu.js
 */
public class Demo4 {
    public static void main(String[] args) throws Exception {
        ScriptEngineManager manager = new ScriptEngineManager();
        ScriptEngine engine = manager.getEngineByName("javascript");
        String jsFileName = "E:\\Java workspace\\java-demo\\src\\main\\resources\\pass.js";
        FileReader reader = new FileReader(jsFileName);
        engine.eval(reader);
        if (engine instanceof Invocable) {
            Invocable invoke = (Invocable) engine;
            String a = invoke.invokeFunction("jiami2", "8814372", "aaaa1111", "!JUC").toString();
        }
        reader.close();
    }
}
