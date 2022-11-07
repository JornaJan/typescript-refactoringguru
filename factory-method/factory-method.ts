/**
 * - Creator 类声明应该返回的工厂方法产品类的对象，创建者的子类通常提供此方法的实现
* */
abstract class Creator {
  /**
   * - 请注意，创建者也可能提供一些默认实现工厂方法
  * */
  public abstract factoryMethod(): Product 

  /**
   * - 另请注意，尽管名称如此，但创作者的主要责任是不创建产品。通常，它包含一些
   *   核心业务逻辑依赖于产品对象，由工厂方法返回，子类可以通过重写工厂方法间接
   *   更改业务逻辑并从中返回不同类型产品
  * */
  public someOperation(): string {
    // 调用工厂方法以创建Product对象
    const product = this.factoryMethod()

    // 现在使用该产品
    return `Creator: The some creator's code has just worked with ${product.operation}`
  }
}

/**
 * - 具体创建者覆盖工厂方法以更改生成的产品类型
* */
class ConcerteCreator1 extends Creator {
  /**
   * - 注意方法的签名仍使用抽象类型，即使ConcerteProduct是从方法返回的，这样创造者可以独立于具体产品类
  * */
  public factoryMethod(): Product {
    return new ConcerteProduct1
  }
}

class ConcerteCreator2 extends Creator {
  public factoryMethod(): Product {
    return new ConcerteProduct2
  }
}

// - 产品接口声明所有ConcerteProduct 必须的操作实现
interface Product {
  operation(): string
}

/**
 * - ConcerteProduct 提供产品接口的各种实现
* */
class ConcerteProduct1 implements Product {
  public operation(): string {
    return `{Result of the ConcerteProduct1}`
  }
}

class ConcerteProduct2 implements Product {
  public operation(): string {
    return `{Result of the ConcerteProduct2}`
  }
}

/**
 * - 客户端代码与具体创建者的实例一起使用，尽管通过其基本接口，只要客户继续通过以下
 *   方式与创造者合作基本接口，可以传递给它任何创建者的子类
* */
function clientCode(creator: Creator) {
  console.log('Client: I\'m not aware of the creator\'s class, but it still works.')
  console.log(creator.someOperation())
}

// 应用程序根据配置或选择创建者的类型环境
console.log('App: Launched with the ConcretedCreator1.')
clientCode(new ConcerteCreator1())
console.log('')

console.log('App: Launched with the ConcretedCreator2.')
clientCode(new ConcerteCreator2())

// 执行结果：
/**
 *
App: Launched with the ConcreteCreator1.
Client: I'm not aware of the creator's class, but it still works.
Creator: The same creator's code has just worked with {Result of the ConcreteProduct1}

App: Launched with the ConcreteCreator2.
Client: I'm not aware of the creator's class, but it still works.
Creator: The same creator's code has just worked with {Result of the ConcreteProduct2}
 * */
