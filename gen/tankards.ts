import { prefix } from "@adeficior/data-modifier-core";
import {
  FluidIngredient,
  FluidResult,
} from "@adeficior/data-modifier-ingredients";
import type { FluidId, ItemId } from "@adeficior/data-modifier/generated";

function fillAndEmptyBoth(fluid: FluidId & ItemId, amount?: number) {
  fillAndEmpty(fluid, fluid, amount);
}

function fillAndEmpty(fluid: FluidId, item: ItemId, amount = 250) {
  const container: ItemId = "brewinandchewin:tankard";

  modifier.tags.items.add("#create:upright_on_belt", container);
  modifier.tags.items.add("#create:upright_on_belt", item);

  // TODO default ids will have prefixes in next release
  modifier.recipes.create.emptying(
    prefix(fluid, "emptying/"),
    [item],
    [container, new FluidResult(fluid, amount)],
  );
  modifier.recipes.create.filling(
    prefix(item, "filling/"),
    [container, new FluidIngredient(fluid, amount)],
    [item],
  );
}

fillAndEmptyBoth("brewinandchewin:beer");
fillAndEmptyBoth("brewinandchewin:bloody_mary");
fillAndEmptyBoth("brewinandchewin:dread_nog");
fillAndEmptyBoth("brewinandchewin:egg_grog");
fillAndEmptyBoth("brewinandchewin:glittering_grenadine");
fillAndEmptyBoth("brewinandchewin:kombucha");
fillAndEmptyBoth("brewinandchewin:mead");
fillAndEmptyBoth("brewinandchewin:pale_jane");
fillAndEmptyBoth("brewinandchewin:red_rum");
fillAndEmptyBoth("brewinandchewin:rice_wine");
fillAndEmptyBoth("brewinandchewin:saccharine_rum");
fillAndEmptyBoth("brewinandchewin:salty_folly");
fillAndEmptyBoth("brewinandchewin:steel_toe_stout");
fillAndEmptyBoth("brewinandchewin:strongroot_ale");
fillAndEmptyBoth("brewinandchewin:vodka");
fillAndEmptyBoth("brewinandchewin:withering_dross");
