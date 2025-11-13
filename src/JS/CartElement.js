import Button from './Button';

export default function CartElement({ id, handleDeleteCartElement }) {
    return (
        <Button type='deleteCartElementBtn' handler={() => handleDeleteCartElement(id)}>&#10007;</Button>
    );
};