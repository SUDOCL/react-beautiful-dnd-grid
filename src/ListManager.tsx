import { DragAndDropWrapper } from "./DragAndDropWrapper/DragAndDropWrapper";
import { withMaxItems } from "./withMaxItems/withMaxItems";
import { withReactToItemsChange } from "./withReactToItemsChange/withReactToItemsChange";
import { v4 as uuidv4 } from 'uuid';

const ComponentWithMaxItems = withMaxItems(DragAndDropWrapper, uuidv4);
const ComponentWithReactToItemsChange = withReactToItemsChange(ComponentWithMaxItems);

export const ListManager = ComponentWithReactToItemsChange;
