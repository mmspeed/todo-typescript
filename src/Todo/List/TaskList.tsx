import { Checkbox, FontIcon, Stack } from "@fluentui/react";
import TaskListStyle from "./TaskList.style";

interface ITask {
  id: string;
  title: string;
  isFavorite: boolean;
}

const TaskList = () => {
  const tasks: ITask[] = [
    {
      id: "1",
      title: "Task 1",
      isFavorite: true,
    },
    {
      id: "2",
      title: "Task 2",
      isFavorite: false,
    },
  ];

  const onRenderCell = (task: ITask) => {
    return (
      <Stack horizontal key={task.id} className={TaskListStyle.taskItem}>
        <Stack horizontal style={{ width: "85%" }}>
          <Checkbox />
          {task.title}
        </Stack>
        <Stack horizontal style={{ width: "15%" }}>
          <FontIcon iconName="Info" className={TaskListStyle.iconStyle} />
          <FontIcon
            iconName={task.isFavorite ? "FavoriteStarFill" : "FavoriteStar"}
            className={TaskListStyle.iconStyle}
          />
          <FontIcon iconName="EditNote" className={TaskListStyle.iconStyle} />
          <FontIcon iconName="Delete" className={TaskListStyle.iconStyle} />
        </Stack>
      </Stack>
    );
  };

  return <div>{tasks.map(onRenderCell)}</div>;
};

export default TaskList;
