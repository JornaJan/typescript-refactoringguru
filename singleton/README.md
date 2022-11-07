### Typescript 单例模式讲解和代码示例

> **单例是一种创建型设计模式，让你能够保证一个类只有一个实例，并提供一个访问该实例的全局节点**

> 单例拥有与全局变量相同的优缺点。尽管它们非常有用，但却会破坏代码的模块化特性

> 在某些上下文中，你不能使用依赖于单例的类。你也必将使用单例类。绝大多数情况下，该限制会在创建单元测试时出现

#### 使用示例：

许多开发者将单例模式视为一种反模式。因此它在Typescript代码中大的使用频率正在逐步减少

#### 识别方法

单例可以通过返回相同缓存对象的静态构建方法来识别

### 概念示例

本示例说明了单例模式的结构并重点回答了下面问题：

- 它由哪些组成？

- 这些类扮演了哪些角色

- 模式中的各个元素以何种方式相互关联

```typescript
/**
 * - Singleton 类定义了允许客户端访问的 getInstance方法
 * - 唯一的单例实例
 * */
class Singleton {
  private static instance: Singleton

  /**
   * - 控制对单一实例的访问的静态方法
   * - 此实现允许您在保持每一个子类只有一个实例
  * */
  public static getInstance(): Singleton {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton()
    }

    return Singleton.instance
  }

  /**
   * - 最后，任何单例都应该定义一些业务逻辑，可以是在其实例上运行
  * '*/
  public someBusinessLogic() {}

  /**
   * 单例构造函数应始终是私有的，以防止直接与新操作员进行施工呼叫
  * */
  private constructor() {}
}

// 客户端代码
function clientCode() {
  const s1 = Singleton.getInstance()
  const s2 = Singleton.getInstance()

  if (s1 === s2) {
    console.log('Singleton works, both variables contain the same instance.')
  } else {
    console.log('Singleton failed, variables contain different instances.')
  }
}

clientCode() // 运行结果： Singleton works, both variables contain the same instance.
```
