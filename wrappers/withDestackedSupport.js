import DestackedSupport from '@destacked/support/provider';

const withDestackedSupport = (Component) => (props) =>
    props.support ? (
        <DestackedSupport args={props.support}>
            <Component {...props} />
        </DestackedSupport>
    ) : (
        <Component {...props} />
    );

export default withDestackedSupport;
