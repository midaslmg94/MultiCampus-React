import React from 'react';

class ErrorBoundary extends React.Component {
    state = {
        error: null
    };
    static getDerivedStateFromError(error) {}
    componentDidUpdate(error, info) {}

    render() {
        const {error} = this.state;
        // 에러가 있으면
        if (error) {
            return <div>
                {error.toString()}
            </div>
        }
        return this.props.children;
    }
}
export default ErrorBoundary;