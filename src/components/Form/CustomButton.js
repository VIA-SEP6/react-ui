import {Button} from "@material-ui/core";


const CustomButton = (props) => {
    return (
        <Button
            color={props.color}
            onClick={props.onClick}
            size={props.size}
            variant="contained"
        >
            {props.children}
        </Button>
    )
}

export default CustomButton;