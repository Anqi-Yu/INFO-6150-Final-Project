# INFO-6150-Final-Porject
classDiagram
    class Customer {
        +String name
        +String phoneNumber
        +int numberOfGuests
        +register()
        +login()
    }

    class Registration {
        +fillInfo(name, phoneNumber, numberOfGuests)
    }

    class Menu {
        +showMenu()
    }

    class PreSetMenu {
        +recommendPackage(numberOfGuests)
    }

    class CustomMenu {
        +selectDishes()
    }

    class CustomerInfo {
        +String name
        +String phoneNumber
        +int numberOfGuests
    }

    class RegisterCustomerService {
        +registerCustomer(name, phoneNumber, numberOfGuests)
    }

    class LoginCustomerService {
        +loginCustomer(name, phoneNumber)
    }

    class RecommendMenuService {
        +recommendMenu(numberOfGuests)
    }

    class SelectMenuService {
        +selectMenu()
    }

    class CustomerRepository {
        +saveCustomerInfo(CustomerInfo)
        +getCustomerInfo(name, phoneNumber)
    }

    class MenuRepository {
        +saveMenu(Menu)
        +getMenu()
    }

    Customer --> Registration : fills info
    Registration --> CustomerInfo : stores
    Customer --> Menu : logs in
    Menu --> PreSetMenu : offers
    Menu --> CustomMenu : offers
    PreSetMenu --> PackageByGuests : recommends
    CustomMenu --> Dishes : allows selecting

    RegisterCustomerService --> Registration : calls
    LoginCustomerService --> Menu : calls
    RecommendMenuService --> PreSetMenu : calls
    SelectMenuService --> CustomMenu : calls

    CustomerRepository --> CustomerInfo : stores
    MenuRepository --> Menu : stores

 逻辑介绍

以下是该类图中各个类及其交互的逻辑介绍：

 顾客注册和信息填写

1. **Customer** 类表示顾客，包含顾客的基本信息（姓名、电话号码、用餐人数）和方法（register()和login()）。
2. 顾客通过 **RegisterCustomerService** 类的 `registerCustomer(name, phoneNumber, numberOfGuests)` 方法注册。
3. **RegisterCustomerService** 调用 **Registration** 类的 `fillInfo(name, phoneNumber, numberOfGuests)` 方法，填写顾客信息。
4. **Registration** 类将填写的信息存储在 **CustomerInfo** 类中。
5. **CustomerRepository** 负责将 **CustomerInfo** 保存到数据库中。

 顾客登录和菜单展示

1. 顾客通过 **LoginCustomerService** 类的 `loginCustomer(name, phoneNumber)` 方法登录。
2. **LoginCustomerService** 调用 **Menu** 类的 `showMenu()` 方法展示菜单。
3. **MenuRepository** 负责从数据库中获取菜单数据。

 菜单推荐和选择

1. **Menu** 类提供两种菜单选项：预设菜单（PreSetMenu）和自定义菜单（CustomMenu）。
2. **PreSetMenu** 类根据顾客的用餐人数推荐套餐，通过 `recommendPackage(numberOfGuests)` 方法。
3. **CustomMenu** 类允许顾客通过 `selectDishes()` 方法自由选择菜品。
4. **RecommendMenuService** 类调用 **PreSetMenu** 类的 `recommendPackage(numberOfGuests)` 方法。
5. **SelectMenuService** 类调用 **CustomMenu** 类的 `selectDishes()` 方法。
6. **MenuRepository** 负责保存和获取菜单数据。


 Logical Explanation

Here is the logical explanation of the classes and their interactions in this class diagram:

 Customer Registration and Information Filling

1. **Customer** class represents the customer, containing basic information (name, phone number, number of guests) and methods (register() and login()).
2. The customer registers through the `registerCustomer(name, phoneNumber, numberOfGuests)` method of the **RegisterCustomerService** class.
3. **RegisterCustomerService** calls the `fillInfo(name, phoneNumber, numberOfGuests)` method of the **Registration** class to fill in customer information.
4. **Registration** class stores the filled information in the **CustomerInfo** class.
5. **CustomerRepository** is responsible for saving **CustomerInfo** to the database.

 Customer Login and Menu Display

1. The customer logs in through the `loginCustomer(name, phoneNumber)` method of the **LoginCustomerService** class.
2. **LoginCustomerService** calls the `showMenu()` method of the **Menu** class to display the menu.
3. **MenuRepository** is responsible for fetching menu data from the database.

 Menu Recommendation and Selection

1. **Menu** class offers two menu options: PreSetMenu and CustomMenu.
2. **PreSetMenu** class recommends packages based on the number of guests through the `recommendPackage(numberOfGuests)` method.
3. **CustomMenu** class allows the customer to freely select dishes through the `selectDishes()` method.
4. **RecommendMenuService** class calls the `recommendPackage(numberOfGuests)` method of the **PreSetMenu** class.
5. **SelectMenuService** class calls the `selectDishes()` method of the **CustomMenu** class.
6. **MenuRepository** is responsible for saving and fetching menu data.

