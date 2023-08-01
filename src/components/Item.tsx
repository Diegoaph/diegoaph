import { Paper, Button } from "@mui/material";

export interface ItemProps {
    item: {
        author: string;
        url: string;
        id: string;
        width: number;
        height: number;
    };
}

const Item = (props: ItemProps) => {
    return (
        <Paper>
            <div
                style={{
                    backgroundImage: `url(${props.item.url})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    height: "30vh",
                }}></div>
        </Paper>
    );
};
export default Item;
