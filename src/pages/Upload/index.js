import { Button, Spinner } from "react-bootstrap";

function Upload() {
    return (
        <div className="text-center">
            <Button>
                <Spinner
                    as='span'
                    animation="grow"
                    size="sm"
                    role='status'
                    aria-hidden='true' />
                &nbsp; Đang tải ...
            </Button>
        </div>
    )
}

export default Upload;