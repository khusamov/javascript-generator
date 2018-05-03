
Генератор JavaScript-кода
=========================

Генератор предназначен для создания ограниченной объектной модели JavaScript-кода
в оперативной памяти и его выгрузке в виде текста кода с форматированием.

Форматирование производится посредством NPM-модуля 
[prettier](https://prettier.io/docs/en/).
 

Пример использования
--------------------

```javascript

// Создание JavaScript-объекта с именем objectSample.
const objectNodeSample = new ObjectNode('objectSample', {
    serviceMethod: 'getPaymentsHistoryByDebtor',
    reader: {
        rootProperty: 'result.ResultItems',
        typeProperty: function(rawNode) {
            const namespace = "Pir.server.model.baseModel.type";
            return "type" in rawNode ? namespace + ".T" + rawNode.type : undefined;
        }
    }
});

// Добавление к объекту свойства property1 с комментарием.
objectNodeSample.add('property1', 'Комментарий к property1.', {a:'a',b:'b'});

// Вывод кода объекта.
const objectCodeSample = new ObjectCode(objectNodeSample);
console.log(objectCodeSample.toString());

```

В консоли отобразится следующее:

```javascript
const objectSample = {
    serviceMethod: 'getPaymentsHistoryByDebtor',
    reader: {
        rootProperty: 'result.ResultItems',
        typeProperty: function(rawNode) {
            const namespace = "Pir.server.model.baseModel.type";
            return "type" in rawNode ? namespace + ".T" + rawNode.type : undefined;
        },
        // **
        // * Комментарий к property1.
        // *
        property1: {
            a: 'a',
            b: 'b'
        }
    }
};
```