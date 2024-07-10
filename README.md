# INFO-6150-Final-Project

```mermaid
classDiagram
    class CustomerInfo {
        +String userId
        +String email
        +String phoneNumber
        +String firstName
        +String lastName
        +int numberOfGuests
        +register()
        +login()
    }

    class Registration {
        +fillInfo(String userId, String email, String firstName, String lastName, String phoneNumber, int numberOfGuests)
    }

    class Menu {
        +Appetizer appetizer
        +Entree entree
        +Dessert dessert
        +Drink drink
        +showMenu(Appetizer appetizer, Entree entree, Dessert dessert, Drink drink)
    }

    class Appetizer{
        +String appetizerName
        +String appetizerImage
    }

    class Entree{
        +String entreeName
        +String entreeImage
    }

    class Dessert{
        +String dessertName
        +String dessertImage
    }

    class Drink{
        +String drinkName
        +String drinkImage
    }

    class PreSetMenu {
        +recommendPackage(int numberOfGuests)
    }

    class CustomizedMenu {
        +addDish()
        +deleteDish()
    }

    class Order{
        +showOrderDetails()
    }

    class PackageByGuests{
        +showOffers()
    }
    
    class PackageOffer{
        +String offer
    }   

    class RegisterCustomerService {
        +registerCustomer(String userId, String email, String phoneNumber, String firstName, String lastName, int numberOfGuests)
    }

    class LoginCustomerService {
        +loginCustomer(String userId, String phoneNumber)
    }

    class RecommendMenuService {
        +recommendMenu(int numberOfGuests)
    }

    class SelectMenuService {
        +selectMenu()
    }

    class CustomerRepository {
        +saveCustomerInfo(CustomerInfo)
        +getCustomerInfo(String userId, String phoneNumber)
    }

    class MenuRepository {
        +saveMenu(Menu)
        +getMenu()
    }

    
    Menu "1" *-- "0..*"Appetizer
    Menu "1" *-- "0..*" Entree
    Menu "1" *-- "0..*" Dessert
    Menu "1" *-- "0..*" Drink
    PackageByGuests *-- PackageOffer


    Registration --> CustomerRepository : stores
    Registration --> CustomerInfo : fills info
    CustomerInfo --> LoginCustomerService : fills info
    SelectMenuService --> RecommendMenuService : offers
    SelectMenuService --> CustomizedMenu : offers
    SelectMenuService --> MenuRepository : retrieves
    PreSetMenu --> PackageByGuests : recommends
    CustomizedMenu --> Order : allows selecting
    RegisterCustomerService --> Registration : calls
    RegisterCustomerService --> CustomerRepository : saveCustomerInfo
    LoginCustomerService --> CustomerRepository : getCustomerInfo
    LoginCustomerService --> Menu : calls
    RecommendMenuService --> PreSetMenu : calls
    CustomerInfo <|-- CustomerRepository  : retrieves
    Menu <|-- MenuRepository : retrieves


```


### Class Diagram Overview:
The class diagram represents a structure for a restaurant management system, encompassing various classes and services tailored for efficient operation and customer interaction.

### Core Classes and Their Functions:
**CustomerInfo**: Stores essential customer details such as user ID, email, phone number, first name, last name, and the number of guests. Provides methods for customer registration and login.

**Registration**: Manages the process of filling and storing customer information into the `CustomerRepository`.

**Menu**: Represents the menu of the restaurant, comprising appetizers, entrees, desserts, and drinks. Includes a method to display the menu items.

**Appetizer, Entree, Dessert, Drink**: Classes representing specific categories of menu items, each with attributes like name and image.

**PreSetMenu**: Offers predefined menu packages recommended based on the number of guests.

**CustomizedMenu**: Allows customers to customize their menu by adding or removing dishes. Collaborates with the `Order` class to finalize selections.

**Order**: Manages detailed order information, facilitating the display of order details.

**PackageByGuests**: Provides offers and packages tailored to the number of guests dining.

**PackageOffer**: Describes specific details of package offers.

**RegisterCustomerService**: Facilitates customer registration by calling the `Registration` class and saving customer information using `CustomerRepository`.

**LoginCustomerService**: Handles customer login functionality, retrieving customer information from `CustomerRepository` and potentially interacting with the Menu.

**RecommendMenuService**: Recommends menus based on the number of guests, utilizing methods from `PreSetMenu`.

**SelectMenuService**: Offers services for selecting menus, possibly interacting with `RecommendMenuService`, `CustomizedMenu`, and `MenuRepository` as needed.

**CustomerRepository**: Manages the storage and retrieval of customer information.

**MenuRepository**: Handles the storage and retrieval of menu items.

### Relationships and Dependencies:
**Dependency**: Registration relies on `CustomerRepository` to store customer information.
**Data Interaction**: CustomerInfo interacts with `LoginCustomerService` for filling in customer details.
**Service Interactions**: SelectMenuService collaborates with RecommendMenuService and CustomizedMenu to provide menu selection capabilities.
**Data Management**: `CustomerRepository` and `MenuRepository` ensure efficient data storage and retrieval for customer and menu information.


### Functionality Overview:

This system allows customers to register and log in, with their details stored securely. They can then select from recommended or customized menus, benefiting from tailored offers based on group size. The separation of customer and menu management ensures flexibility and efficiency in restaurant operations, supporting a seamless customer experience.

This design is structured to meet the operational needs of a restaurant, providing robust functionality for managing customer interactions and menu offerings effectively.