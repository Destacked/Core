import FireblazeInterface from '@destacked/interface/provider';

const withDestackedInterface = (Component) => (props) =>
    props.interface ? (
        <FireblazeInterface args={props.interface}>
            <Component {...props} />
        </FireblazeInterface>
    ) : (
        <Component {...props} />
    );

export default withDestackedInterface;
