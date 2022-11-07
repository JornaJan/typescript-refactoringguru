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
