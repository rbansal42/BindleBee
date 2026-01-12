interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
}

export function Input({ label, error, className = '', ...props }: InputProps) {
    return (
        <div className="w-full">
            {label && (
                <label className="block text-sm font-medium text-charcoal mb-2">{label}</label>
            )}
            <input
                className={`w-full px-4 py-3 bg-beige border border-sand rounded-lg text-charcoal placeholder:text-taupe
          focus:outline-none focus:border-walnut focus:ring-2 focus:ring-walnut/10
          transition-all duration-300 ${error ? 'border-terracotta' : ''} ${className}`}
                {...props}
            />
            {error && <p className="mt-1 text-sm text-terracotta">{error}</p>}
        </div>
    );
}

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    label?: string;
    error?: string;
}

export function Textarea({ label, error, className = '', ...props }: TextareaProps) {
    return (
        <div className="w-full">
            {label && (
                <label className="block text-sm font-medium text-charcoal mb-2">{label}</label>
            )}
            <textarea
                className={`w-full px-4 py-3 bg-beige border border-sand rounded-lg text-charcoal placeholder:text-taupe
          focus:outline-none focus:border-walnut focus:ring-2 focus:ring-walnut/10
          transition-all duration-300 resize-none ${error ? 'border-terracotta' : ''} ${className}`}
                rows={5}
                {...props}
            />
            {error && <p className="mt-1 text-sm text-terracotta">{error}</p>}
        </div>
    );
}

export default Input;
