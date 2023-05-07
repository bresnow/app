export default function AuthProvider({ children }) {
    return (
        <div name={JOY.key ? "~" + JOY.key.pub : null}>{children}</div>
    )
};
