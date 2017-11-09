## equal 相等或者不相等
    expect(4 + 5).to.be.equal(9);
    expect(1 + 2).to.not.equal(4);

## above 断言目标的值大于某个value 如果前面有length的链式标记，则可以用来判断数组长度或者字符串长度
    expect(10).to.be.above(5);
    expect('foo').to.have.length.above(2);
*类似的还有least(value)表示大于等于；below(value)表示小于；most(value)表示小于等于*

## 判断目标是否为布尔值true（隐式转换）
    expect('everthing').to.be.ok;
    expect(1).to.be.ok;  
    expect(false).to.not.be.ok;
    expect(undefined).to.not.be.ok;  
    expect(null).to.not.be.ok; 

## true/false 断言目标是否为true或false
    expect(true).to.be.true;  
    expect(1).to.not.be.true;

## null/undefined 断言目标是否为null/undefined
    expect(null).to.be.null;  
    expect(undefined).not.to.be.null;
    expect(undefined).to.be.undefined;  
    expect(null).to.not.be.undefined

## NaN断言目标值不是数值
    expect('foo').to.be.NaN;
    expect(4).not.to.be.NaN

## 判断类型
    expect('test').to.be.a('string');
    expect({ foo: 'bar' }).to.be.an('object');
    expect(foo).to.be.an.instanceof(Foo);
    expect(null).to.be.a('null');  
    expect(undefined).to.be.an('undefined');
    expect(new Error).to.be.an('error');
    expect(new Promise).to.be.a('promise');

## 包含关系:用来断言字符串包含和数组包含。如果用在链式调用中，可以用来测试对象是否包含某key 可以混着用。
    expect([1,2,3]).to.include(2);
    expect('foobar').to.contain('foo');
    expect({ foo: 'bar', hello: 'universe' }).to.include.keys('foo');

## 判断空值
    expect([]).to.be.empty;
    expect('').to.be.empty;
    expect({}).to.be.empty;

## match断言正则匹配
    expect('foobar').to.match(/^foo/);

## exist 断言目标既不是null也不是undefined
    var foo = 'hi' , bar = null, baz;
    expect(foo).to.exist;  
    expect(bar).to.not.exist;  
    expect(baz).to.not.exist;

## within断言目标值在某个区间范围内，可以与length连用
    expect(7).to.be.within(5,10);  
    expect('foo').to.have.length.within(2,4);  
    expect([ 1, 2, 3 ]).to.have.length.within(2,4);

## instanceOf 断言目标是某个构造器产生的事例
    var Tea = function (name) { this.name = name; } , Chai = new Tea('chai');
    expect(Chai).to.be.an.instanceof(Tea);  
    expect([ 1, 2, 3 ]).to.be.instanceof(Array);

## property(name, [value])  断言目标有以name为key的属性,并且可以指定value断言属性值是严格相等的,此[value]参数为可选,如果使用deep链式调用,可以在name中指定对象或数组的引用表示方法
    浅对象
    var obj = { foo: 'bar' };  
    expect(obj).to.have.property('foo');  
    expect(obj).to.have.property('foo', 'bar');// 类似于expect(obj).to.contains.keys('foo')
    深对象
    var deepObj = {  
        green: { tea: 'matcha' },
        teas: [ 'chai', 'matcha', { tea: 'konacha' } ]
    };
    expect(deepObj).to.have.deep.property('green.tea', 'matcha');  
    expect(deepObj).to.have.deep.property('teas[1]', 'matcha');  
    expect(deepObj).to.have.deep.property('teas[2].tea', 'konacha')

## ownproperty 断言目标拥有自己的属性，非原型链继承
    expect('test').to.have.ownProperty('length');
