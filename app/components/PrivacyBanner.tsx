interface PrivacyBannerProps {
  onAccept: () => void;
}

export const PrivacyBanner = ({ onAccept }: PrivacyBannerProps) => (
  <div className="fixed bottom-0 left-0 right-0 bg-black p-4 border-t border-gray-800 z-50">
    <div className="max-w-7xl mx-auto flex justify-between items-center">
      <p className="text-sm">
        By continuing to browse the site you agree to our{' '}
        <a href="#" className="underline">
          Privacy policy
        </a>
      </p>
      <button
        onClick={onAccept}
        className="px-6 py-2 text-sm border border-white hover:bg-white hover:text-black transition-all duration-300"
      >
        Accept
      </button>
    </div>
  </div>
)
