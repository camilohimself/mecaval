'use client';

import { useState } from 'react';
import { Send } from 'lucide-react';
import Button from './Button';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    machineType: '',
    message: '',
    requestQuote: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simuler l'envoi (à remplacer par API call réel plus tard)
    await new Promise(resolve => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setSubmitStatus('success');

    // Reset form après succès
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        machineType: '',
        message: '',
        requestQuote: false
      });
      setSubmitStatus('idle');
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Nom */}
      <div>
        <label htmlFor="name" className="block text-sm font-semibold text-gris-900 mb-2">
          Nom complet *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          autoComplete="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-3 border-2 border-gris-300 rounded-lg focus:border-teal-700 focus:outline-none transition-colors"
          placeholder="Jean Dupont"
        />
      </div>

      {/* Email & Téléphone */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-gris-900 mb-2">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            autoComplete="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 border-2 border-gris-300 rounded-lg focus:border-teal-700 focus:outline-none transition-colors"
            placeholder="jean@example.com"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-gris-900 mb-2">
            Téléphone *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            autoComplete="tel"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 border-2 border-gris-300 rounded-lg focus:border-teal-700 focus:outline-none transition-colors"
            placeholder="076 123 45 67"
          />
        </div>
      </div>

      {/* Type de machine */}
      <div>
        <label htmlFor="machineType" className="block text-sm font-semibold text-gris-900 mb-2">
          Type de machine *
        </label>
        <select
          id="machineType"
          name="machineType"
          required
          value={formData.machineType}
          onChange={handleChange}
          className="w-full px-4 py-3 border-2 border-gris-300 rounded-lg focus:border-teal-700 focus:outline-none transition-colors bg-white"
        >
          <option value="">Sélectionnez...</option>
          <option value="machine-electrique">Machine électrique</option>
          <option value="machine-thermique">Machine thermique</option>
          <option value="velo">Vélo / E-bike</option>
          <option value="autre">Autre</option>
        </select>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-gris-900 mb-2">
          Décrivez votre demande *
        </label>
        <textarea
          id="message"
          name="message"
          required
          value={formData.message}
          onChange={handleChange}
          rows={6}
          className="w-full px-4 py-3 border-2 border-gris-300 rounded-lg focus:border-teal-700 focus:outline-none transition-colors resize-none"
          placeholder="Décrivez le problème ou votre demande..."
        />
      </div>

      {/* Demande devis */}
      <div className="flex items-start gap-3">
        <input
          type="checkbox"
          id="requestQuote"
          name="requestQuote"
          checked={formData.requestQuote}
          onChange={handleChange}
          className="mt-1 w-5 h-5 text-teal-700 border-gris-300 rounded focus:ring-teal-700"
        />
        <label htmlFor="requestQuote" className="text-sm text-gris-700">
          Je souhaite recevoir un devis détaillé
        </label>
      </div>

      {/* Submit Button */}
      <div>
        {submitStatus === 'success' ? (
          <div className="bg-green-50 border-2 border-green-500 text-green-700 px-6 py-4 rounded-lg text-center font-semibold">
            Message envoyé avec succès ! Nous vous répondrons rapidement.
          </div>
        ) : (
          <Button
            type="submit"
            variant="primary"
            size="lg"
            fullWidth
            icon={Send}
            iconPosition="right"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}
          </Button>
        )}
      </div>

      <p className="text-sm text-gris-600 text-center">
        * Champs obligatoires • Vos données sont confidentielles
      </p>
    </form>
  );
}
