// src/components/RSVPList.tsx
import React, { useEffect, useState } from 'react';
import { supabase } from '../../supabase';

// RSVP දත්ත සඳහා Type (Interface) එක නිර්මාණය කිරීම
interface RSVP {
  id: string | number;
  name: string;
  attendance: string;
  guests: number;
  message?: string | null;
}

export default function RSVPList() {
  // Types ලබා දීම
  const [rsvps, setRsvps] = useState<RSVP[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchRSVPs = async () => {
      try {
        // අලුත්ම දත්ත (created_at) අනුව පිළිවෙලකට ගන්නවා
        const { data, error } = await supabase
          .from('rsvps')
          .select('*')
          .order('created_at', { ascending: false });

        if (error) throw error;
        
        // Supabase එකෙන් එන data එක RSVP[] විදිහට set කරනවා
        setRsvps(data as RSVP[]);
      } catch (error: any) {
        console.error("Error fetching data: ", error.message);
      }
      setLoading(false);
    };

    fetchRSVPs();
  }, []);

  if (loading) return <div className="text-center p-10 font-bold">Loading RSVP data...</div>;

  return (
    <div className="max-w-4xl mx-auto p-6 mt-10 bg-white rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">RSVP List ({rsvps.length})</h2>
      
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto text-left border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-3 border-b">නම</th>
              <th className="p-3 border-b">පැමිණීම</th>
              <th className="p-3 border-b">ගණන</th>
              <th className="p-3 border-b">පණිවිඩය</th>
            </tr>
          </thead>
          <tbody>
            {rsvps.map((rsvp) => (
              <tr key={rsvp.id} className="hover:bg-gray-50">
                <td className="p-3 border-b font-medium">{rsvp.name}</td>
                <td className="p-3 border-b">
                  <span className={`px-2 py-1 rounded text-xs font-semibold ${rsvp.attendance === 'Yes' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                    {rsvp.attendance}
                  </span>
                </td>
                <td className="p-3 border-b">{rsvp.guests}</td>
                <td className="p-3 border-b text-gray-600">{rsvp.message || '-'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}