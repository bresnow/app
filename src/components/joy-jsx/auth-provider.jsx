export default function AuthProvider({ children }) {
    return (
        <section name={JOY.key ? "~" + JOY.key.pub : null}>{children}</section>
    )
};
