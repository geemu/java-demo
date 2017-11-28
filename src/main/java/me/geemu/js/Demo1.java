package me.geemu.js;

import javax.script.*;

/**
 * @author geemu
 * Email：cfmmail@sina.com
 * Date：2017/11/28 16:28
 * Despriction：main.java.me.geemu.js
 */
public class Demo1 {
    public static void main(String[] args) throws ScriptException {
        ScriptEngineManager manager = new ScriptEngineManager();
        ScriptEngine engine = manager.getEngineByName("javascript");
        try {
            engine.eval("var a=3; var b=4;print (a+b);");
        } catch (ScriptException e) {
            e.printStackTrace();
        }
    }
}
