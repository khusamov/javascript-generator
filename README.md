
Генератор JavaScript-кода
=========================

Пример использования
--------------------

```javascript

const objectNodeSample = new ObjectNode({
    serviceMethod: 'getPaymentsHistoryByDebtor',
    reader: {
        rootProperty: 'result.ResultItems',
        typeProperty: function(rawNode) {
            const namespace = "Pir.server.model.baseModel.type";
            return "type" in rawNode ? namespace + ".T" + rawNode.type : undefined;
        }
    }
});

objectNodeSample.name = 'objectSample';

objectNodeSample.add('property1', {a:'a',b:'b'}, 'Комментарий к property1.');

const objectCodeSample = new ObjectCode(objectNodeSample);

console.log(objectCodeSample.toString());

```