
История изменений
=================

1.8.3
-----

Подавлен вывод сообщения:

    No parser and no filepath given, using 'babylon' the parser now but this
    will throw an error in the future. Please specify a parser or a filepath
    so one can be inferred.

Подробности см. https://github.com/prettier/prettier/issues/4718

1.8.2
-----

Решение проблемы с excludeEmptyNodes при переопределении метода createExpressionToString без вызова его предка.

1.8.1
-----

В классах ArrayCode и ObjectCode возвращена возможность указывать типы узла и вида узла.

1.8.0
-----
Добавлена опция excludeEmptyNodes, дающая возможность исключать пустые узлы из выходного кода.

1.7.0
-----
Добавлена возможность создавать безымянные узлы в ObjectNode (имя в этом случае берется из описания свойства).

Класс FunctionNode теперь позволяет создать узел на основании текста с кодом функции.

Добавлена возможность создания безымянного FunctionNode и ExpressionNode узлов при помощи функции шаблонизации:  
FunctionNode.nameless`Выражение описывающие создание функции.`  
ExpressionNode.nameless`Выражение описывающие создание функции.`  

1.6.0
-----
В классах Code, ArrayCode, ObjectCode добавлена возможность указывать тип узла.

1.5.0
-----
Добавлен метод AbstractNode.set().

1.4.3
-----
Специальный узел $$items заменен на static nodeItemsSymbol = Symbol('$$items').

1.4.2
-----

В классе ArrayNode исправлены методы uniq() и add(), 
Cвойство ArrayNode.unique по умолчанию теперь равно false.

1.4.1
-----

Добавлена генерация ошибки "Для узла не задан тип или значение." 
при попытке добавления в ObjectNode узла без указания типа или значения.

1.4.0
-----

Добавлена функция `isTDerivedNodeClass()`.