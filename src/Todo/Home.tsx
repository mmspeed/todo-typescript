import HomeStyle from "./Home.style";
import TodoString from "./String.json";
import { Pivot } from "@fluentui/react/lib/Pivot";
import { PivotItem } from "@fluentui/react/lib/Pivot";
import { Label, Stack } from "@fluentui/react";
import { useState } from "react";
import { PivotKeysEnum } from "./Types";
import TaskList from "./List/TaskList";
import { initializeIcons } from "@fluentui/react";
initializeIcons();

const Home = () => {
  const [selectedKey, setSelectedKey] = useState<string>(PivotKeysEnum.Tasks);
  return (
    <Stack className={HomeStyle.todoContainer}>
      <header className={HomeStyle.headerStyle}>
        <h2>{TodoString.header}</h2>
      </header>
      <Stack className={HomeStyle.pivotContainer}>
        <Pivot
          selectedKey={String(selectedKey)}
          styles={{ root: HomeStyle.pivotRoot }}
          onLinkClick={(item?: PivotItem) => {
            setSelectedKey(item?.props.itemKey || PivotKeysEnum.Tasks);
          }}
        >
          <PivotItem
            headerText={TodoString.pivots.tasksTab}
            itemKey={PivotKeysEnum.Tasks}
          >
            <TaskList />
          </PivotItem>
          <PivotItem
            headerText={TodoString.pivots.taskFormTab}
            itemKey={PivotKeysEnum.TaskForm}
          >
            <Label>Pivot 2</Label>
          </PivotItem>
          <PivotItem
            headerText={TodoString.pivots.completedTaskTab}
            itemKey={PivotKeysEnum.CompletedTasks}
          >
            <Label>Pivot 3</Label>
          </PivotItem>
        </Pivot>
      </Stack>
    </Stack>
  );
};

export default Home;
