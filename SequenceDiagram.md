title House of Hummus


participant Main

participant FoodTruck



participant Vegetables
participant SideDishes

participant Entrees
participant Sales

participant TransientState

participant API

Main->FoodTruck: Render all HTML
FoodTruck-->Main: Here is FoodTruck HTML

FoodTruck->Vegetables:Generate vegetable options

loop
note over Vegetables: Iterate through all Vegetables
end
Vegetables-->FoodTruck:Here are some radio buttons
FoodTruck->SideDishes:Generate Side Dishes

loop
note over SideDishes: Iterate through all SideDishes
end
SideDishes-->FoodTruck:Here are some radio buttons

FoodTruck->Entrees:getEntrees()
loop
note over Entrees: Iterate through all Entree
end

Entrees-->FoodTruck:return Entree radio buttons
TransientState->API:Save this dinner order
API-->TransientState:OrderSaved
note over TransientState:clear user choices
