package me.geemu.js;

import javax.script.*;

/**
 * @author geemu
 * Email：cfmmail@sina.com
 * Date：2017/11/28 16:33
 * Despriction：me.geemu.js
 */
public class Demo2 {
    public static void main(String[] args) throws ScriptException {
        ScriptEngineManager manager = new ScriptEngineManager();
        ScriptEngine engine = manager.getEngineByName("javascript");
        engine.put("a", 4);
        engine.put("b", 3);
        Double result = (Double) engine.eval("a+b");
        System.out.println("result = " + result);
        engine.eval("c=a+b");
        Double c = (Double) engine.get("c");
        System.out.println("c = " + c);
    }
}
