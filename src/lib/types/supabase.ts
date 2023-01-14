// Generated via https://supabase.com/docs/guides/api/generating-types#generating-types-using-supabase-cli
// npx supabase gen types typescript --project-id "emqmvubrovsmdfjrbqjr" --schema public > src/lib/types/supabase.ts
export type Json = string | number | boolean | null | { [key: string]: Json } | Json[];

export interface Database {
	public: {
		Tables: {
			documents: {
				Row: {
					affected_donees: string | null;
					affected_donors: string | null;
					affected_influencers: string | null;
					author: string | null;
					cause_area: string | null;
					document_id: number;
					document_scope:
						| 'Launch'
						| 'Merger'
						| 'Shutdown'
						| 'Pre-launch planning'
						| 'Broad donor strategy'
						| 'Single donation documentation'
						| 'Donee periodic update'
						| 'Donee donation case'
						| 'Evaluator review of donee'
						| 'Evaluator update on donee'
						| 'Evaluator consolidated recommendation list'
						| 'Periodic donation list documentation'
						| 'Reasoning supplement'
						| 'Third-party coverage of donor strategy'
						| 'Third-party case for donation'
						| 'Third-party case against donation'
						| 'Donation suggestion list'
						| 'Unsolicited third-party suggestions for donor'
						| 'Review of current state of cause area'
						| 'Status change'
						| 'Miscellaneous commentary'
						| 'Donee AMA'
						| 'Evaluator retrospective'
						| 'Evaluator quantification approach'
						| 'Job advertisement'
						| 'Request for proposals'
						| 'Request for reviews of donee'
						| 'Request for critiques of donor strategy'
						| 'Partnership'
						| null;
					modified_date: string | null;
					notes: string | null;
					publication_date: string | null;
					publisher: string | null;
					title: string | null;
					url: string | null;
				};
				Insert: {
					affected_donees?: string | null;
					affected_donors?: string | null;
					affected_influencers?: string | null;
					author?: string | null;
					cause_area?: string | null;
					document_id?: number;
					document_scope?:
						| 'Launch'
						| 'Merger'
						| 'Shutdown'
						| 'Pre-launch planning'
						| 'Broad donor strategy'
						| 'Single donation documentation'
						| 'Donee periodic update'
						| 'Donee donation case'
						| 'Evaluator review of donee'
						| 'Evaluator update on donee'
						| 'Evaluator consolidated recommendation list'
						| 'Periodic donation list documentation'
						| 'Reasoning supplement'
						| 'Third-party coverage of donor strategy'
						| 'Third-party case for donation'
						| 'Third-party case against donation'
						| 'Donation suggestion list'
						| 'Unsolicited third-party suggestions for donor'
						| 'Review of current state of cause area'
						| 'Status change'
						| 'Miscellaneous commentary'
						| 'Donee AMA'
						| 'Evaluator retrospective'
						| 'Evaluator quantification approach'
						| 'Job advertisement'
						| 'Request for proposals'
						| 'Request for reviews of donee'
						| 'Request for critiques of donor strategy'
						| 'Partnership'
						| null;
					modified_date?: string | null;
					notes?: string | null;
					publication_date?: string | null;
					publisher?: string | null;
					title?: string | null;
					url?: string | null;
				};
				Update: {
					affected_donees?: string | null;
					affected_donors?: string | null;
					affected_influencers?: string | null;
					author?: string | null;
					cause_area?: string | null;
					document_id?: number;
					document_scope?:
						| 'Launch'
						| 'Merger'
						| 'Shutdown'
						| 'Pre-launch planning'
						| 'Broad donor strategy'
						| 'Single donation documentation'
						| 'Donee periodic update'
						| 'Donee donation case'
						| 'Evaluator review of donee'
						| 'Evaluator update on donee'
						| 'Evaluator consolidated recommendation list'
						| 'Periodic donation list documentation'
						| 'Reasoning supplement'
						| 'Third-party coverage of donor strategy'
						| 'Third-party case for donation'
						| 'Third-party case against donation'
						| 'Donation suggestion list'
						| 'Unsolicited third-party suggestions for donor'
						| 'Review of current state of cause area'
						| 'Status change'
						| 'Miscellaneous commentary'
						| 'Donee AMA'
						| 'Evaluator retrospective'
						| 'Evaluator quantification approach'
						| 'Job advertisement'
						| 'Request for proposals'
						| 'Request for reviews of donee'
						| 'Request for critiques of donor strategy'
						| 'Partnership'
						| null;
					modified_date?: string | null;
					notes?: string | null;
					publication_date?: string | null;
					publisher?: string | null;
					title?: string | null;
					url?: string | null;
				};
			};
			donations: {
				Row: {
					affected_cities: string | null;
					affected_countries: string | null;
					affected_regions: string | null;
					affected_states: string | null;
					amount: number | null;
					amount_original_currency: string | null;
					cause_area: string | null;
					cause_area_array: string[] | null;
					currency_conversion_basis: string | null;
					currency_conversion_date: string | null;
					donation_announcement_date: string | null;
					donation_announcement_date_precision: string | null;
					donation_announcement_url: string | null;
					donation_date: string | null;
					donation_date_basis: string | null;
					donation_date_precision: string | null;
					donation_earmark: string | null;
					donation_id: number;
					donation_process: string | null;
					donee: string | null;
					donor: string | null;
					donor_amount_reason: string | null;
					donor_cause_area_url: string | null;
					donor_donee_reason: string | null;
					donor_next_donation_thoughts: string | null;
					donor_retrospective: string | null;
					donor_timing_reason: string | null;
					employer_match: string | null;
					fraction: string | null;
					goal_amount: string | null;
					influencer: string | null;
					intended_funding_timeframe_in_months: string | null;
					intended_use_of_funds: string | null;
					intended_use_of_funds_category: string | null;
					is_contractwork: string | null;
					match_eligible: string | null;
					matching_employer: string | null;
					notes: string | null;
					original_currency: string | null;
					payment_modality: string | null;
					predictions: string | null;
					special_donation_reason: string | null;
					url: string | null;
				};
				Insert: {
					affected_cities?: string | null;
					affected_countries?: string | null;
					affected_regions?: string | null;
					affected_states?: string | null;
					amount?: number | null;
					amount_original_currency?: string | null;
					cause_area?: string | null;
					cause_area_array?: string[] | null;
					currency_conversion_basis?: string | null;
					currency_conversion_date?: string | null;
					donation_announcement_date?: string | null;
					donation_announcement_date_precision?: string | null;
					donation_announcement_url?: string | null;
					donation_date?: string | null;
					donation_date_basis?: string | null;
					donation_date_precision?: string | null;
					donation_earmark?: string | null;
					donation_id: number;
					donation_process?: string | null;
					donee?: string | null;
					donor?: string | null;
					donor_amount_reason?: string | null;
					donor_cause_area_url?: string | null;
					donor_donee_reason?: string | null;
					donor_next_donation_thoughts?: string | null;
					donor_retrospective?: string | null;
					donor_timing_reason?: string | null;
					employer_match?: string | null;
					fraction?: string | null;
					goal_amount?: string | null;
					influencer?: string | null;
					intended_funding_timeframe_in_months?: string | null;
					intended_use_of_funds?: string | null;
					intended_use_of_funds_category?: string | null;
					is_contractwork?: string | null;
					match_eligible?: string | null;
					matching_employer?: string | null;
					notes?: string | null;
					original_currency?: string | null;
					payment_modality?: string | null;
					predictions?: string | null;
					special_donation_reason?: string | null;
					url?: string | null;
				};
				Update: {
					affected_cities?: string | null;
					affected_countries?: string | null;
					affected_regions?: string | null;
					affected_states?: string | null;
					amount?: number | null;
					amount_original_currency?: string | null;
					cause_area?: string | null;
					cause_area_array?: string[] | null;
					currency_conversion_basis?: string | null;
					currency_conversion_date?: string | null;
					donation_announcement_date?: string | null;
					donation_announcement_date_precision?: string | null;
					donation_announcement_url?: string | null;
					donation_date?: string | null;
					donation_date_basis?: string | null;
					donation_date_precision?: string | null;
					donation_earmark?: string | null;
					donation_id?: number;
					donation_process?: string | null;
					donee?: string | null;
					donor?: string | null;
					donor_amount_reason?: string | null;
					donor_cause_area_url?: string | null;
					donor_donee_reason?: string | null;
					donor_next_donation_thoughts?: string | null;
					donor_retrospective?: string | null;
					donor_timing_reason?: string | null;
					employer_match?: string | null;
					fraction?: string | null;
					goal_amount?: string | null;
					influencer?: string | null;
					intended_funding_timeframe_in_months?: string | null;
					intended_use_of_funds?: string | null;
					intended_use_of_funds_category?: string | null;
					is_contractwork?: string | null;
					match_eligible?: string | null;
					matching_employer?: string | null;
					notes?: string | null;
					original_currency?: string | null;
					payment_modality?: string | null;
					predictions?: string | null;
					special_donation_reason?: string | null;
					url?: string | null;
				};
			};
			donationsea: {
				Row: {
					affected_cities: string | null;
					affected_countries: string | null;
					affected_regions: string | null;
					affected_states: string | null;
					amount: number | null;
					amount_original_currency: string | null;
					cause_area: string | null;
					cause_arrea_array: string[] | null;
					currency_conversion_basis: string | null;
					currency_conversion_date: string | null;
					donation_announcement_date: string | null;
					donation_announcement_date_precision: string | null;
					donation_announcement_url: string | null;
					donation_date: string | null;
					donation_date_basis: string | null;
					donation_date_precision: string | null;
					donation_earmark: string | null;
					donation_id: number;
					donation_process: string | null;
					donee: string | null;
					donor: string | null;
					donor_amount_reason: string | null;
					donor_cause_area_url: string | null;
					donor_donee_reason: string | null;
					donor_next_donation_thoughts: string | null;
					donor_retrospective: string | null;
					donor_timing_reason: string | null;
					employer_match: string | null;
					fraction: string | null;
					goal_amount: string | null;
					influencer: string | null;
					intended_funding_timeframe_in_months: string | null;
					intended_use_of_funds: string | null;
					intended_use_of_funds_category: string | null;
					is_contractwork: string | null;
					match_eligible: string | null;
					matching_employer: string | null;
					notes: string | null;
					original_currency: string | null;
					payment_modality: string | null;
					predictions: string | null;
					special_donation_reason: string | null;
					url: string | null;
				};
				Insert: {
					affected_cities?: string | null;
					affected_countries?: string | null;
					affected_regions?: string | null;
					affected_states?: string | null;
					amount?: number | null;
					amount_original_currency?: string | null;
					cause_area?: string | null;
					cause_arrea_array?: string[] | null;
					currency_conversion_basis?: string | null;
					currency_conversion_date?: string | null;
					donation_announcement_date?: string | null;
					donation_announcement_date_precision?: string | null;
					donation_announcement_url?: string | null;
					donation_date?: string | null;
					donation_date_basis?: string | null;
					donation_date_precision?: string | null;
					donation_earmark?: string | null;
					donation_id: number;
					donation_process?: string | null;
					donee?: string | null;
					donor?: string | null;
					donor_amount_reason?: string | null;
					donor_cause_area_url?: string | null;
					donor_donee_reason?: string | null;
					donor_next_donation_thoughts?: string | null;
					donor_retrospective?: string | null;
					donor_timing_reason?: string | null;
					employer_match?: string | null;
					fraction?: string | null;
					goal_amount?: string | null;
					influencer?: string | null;
					intended_funding_timeframe_in_months?: string | null;
					intended_use_of_funds?: string | null;
					intended_use_of_funds_category?: string | null;
					is_contractwork?: string | null;
					match_eligible?: string | null;
					matching_employer?: string | null;
					notes?: string | null;
					original_currency?: string | null;
					payment_modality?: string | null;
					predictions?: string | null;
					special_donation_reason?: string | null;
					url?: string | null;
				};
				Update: {
					affected_cities?: string | null;
					affected_countries?: string | null;
					affected_regions?: string | null;
					affected_states?: string | null;
					amount?: number | null;
					amount_original_currency?: string | null;
					cause_area?: string | null;
					cause_arrea_array?: string[] | null;
					currency_conversion_basis?: string | null;
					currency_conversion_date?: string | null;
					donation_announcement_date?: string | null;
					donation_announcement_date_precision?: string | null;
					donation_announcement_url?: string | null;
					donation_date?: string | null;
					donation_date_basis?: string | null;
					donation_date_precision?: string | null;
					donation_earmark?: string | null;
					donation_id?: number;
					donation_process?: string | null;
					donee?: string | null;
					donor?: string | null;
					donor_amount_reason?: string | null;
					donor_cause_area_url?: string | null;
					donor_donee_reason?: string | null;
					donor_next_donation_thoughts?: string | null;
					donor_retrospective?: string | null;
					donor_timing_reason?: string | null;
					employer_match?: string | null;
					fraction?: string | null;
					goal_amount?: string | null;
					influencer?: string | null;
					intended_funding_timeframe_in_months?: string | null;
					intended_use_of_funds?: string | null;
					intended_use_of_funds_category?: string | null;
					is_contractwork?: string | null;
					match_eligible?: string | null;
					matching_employer?: string | null;
					notes?: string | null;
					original_currency?: string | null;
					payment_modality?: string | null;
					predictions?: string | null;
					special_donation_reason?: string | null;
					url?: string | null;
				};
			};
			donees: {
				Row: {
					ace_review: string | null;
					autogenerated: boolean | null;
					bay_area: boolean | null;
					cause_area: string | null;
					charity_navigator_page: string | null;
					contact_email: string | null;
					country: string | null;
					donate_page: string | null;
					donation_case_page: string | null;
					donation_statistics_page: string | null;
					donee: string;
					donee_id: number;
					donee_type: 'Private nonprofit' | 'Donor-advised fund' | 'Subsidiary' | null;
					donor_list_page: string | null;
					eahub_username: string | null;
					facebook_username: string | null;
					givewell_review: string | null;
					guidestar_page: string | null;
					instagram_username: string | null;
					key_people: string | null;
					launch_date: string | null;
					launch_date_precision: 'day' | 'month' | 'year' | 'multi-year' | null;
					launch_date_url: string | null;
					medium_username: string | null;
					notes: string | null;
					open_phil_grant_review: string | null;
					orgwatch: boolean | null;
					other_names: string | null;
					pinterest_username: string | null;
					recommenders: string | null;
					timelines_wiki_page: string | null;
					transparency_and_financials_page: string | null;
					tumblr_subdomain: string | null;
					twitter_username: string | null;
					website: string | null;
					wikipedia_page: string | null;
					youtube_username: string | null;
				};
				Insert: {
					ace_review?: string | null;
					autogenerated?: boolean | null;
					bay_area?: boolean | null;
					cause_area?: string | null;
					charity_navigator_page?: string | null;
					contact_email?: string | null;
					country?: string | null;
					donate_page?: string | null;
					donation_case_page?: string | null;
					donation_statistics_page?: string | null;
					donee: string;
					donee_id?: number;
					donee_type?: 'Private nonprofit' | 'Donor-advised fund' | 'Subsidiary' | null;
					donor_list_page?: string | null;
					eahub_username?: string | null;
					facebook_username?: string | null;
					givewell_review?: string | null;
					guidestar_page?: string | null;
					instagram_username?: string | null;
					key_people?: string | null;
					launch_date?: string | null;
					launch_date_precision?: 'day' | 'month' | 'year' | 'multi-year' | null;
					launch_date_url?: string | null;
					medium_username?: string | null;
					notes?: string | null;
					open_phil_grant_review?: string | null;
					orgwatch?: boolean | null;
					other_names?: string | null;
					pinterest_username?: string | null;
					recommenders?: string | null;
					timelines_wiki_page?: string | null;
					transparency_and_financials_page?: string | null;
					tumblr_subdomain?: string | null;
					twitter_username?: string | null;
					website?: string | null;
					wikipedia_page?: string | null;
					youtube_username?: string | null;
				};
				Update: {
					ace_review?: string | null;
					autogenerated?: boolean | null;
					bay_area?: boolean | null;
					cause_area?: string | null;
					charity_navigator_page?: string | null;
					contact_email?: string | null;
					country?: string | null;
					donate_page?: string | null;
					donation_case_page?: string | null;
					donation_statistics_page?: string | null;
					donee?: string;
					donee_id?: number;
					donee_type?: 'Private nonprofit' | 'Donor-advised fund' | 'Subsidiary' | null;
					donor_list_page?: string | null;
					eahub_username?: string | null;
					facebook_username?: string | null;
					givewell_review?: string | null;
					guidestar_page?: string | null;
					instagram_username?: string | null;
					key_people?: string | null;
					launch_date?: string | null;
					launch_date_precision?: 'day' | 'month' | 'year' | 'multi-year' | null;
					launch_date_url?: string | null;
					medium_username?: string | null;
					notes?: string | null;
					open_phil_grant_review?: string | null;
					orgwatch?: boolean | null;
					other_names?: string | null;
					pinterest_username?: string | null;
					recommenders?: string | null;
					timelines_wiki_page?: string | null;
					transparency_and_financials_page?: string | null;
					tumblr_subdomain?: string | null;
					twitter_username?: string | null;
					website?: string | null;
					wikipedia_page?: string | null;
					youtube_username?: string | null;
				};
			};
			donors: {
				Row: {
					id: number;
					name: string;
					total_given: number | null;
				};
				Insert: {
					id: number;
					name: string;
					total_given?: number | null;
				};
				Update: {
					id?: number;
					name?: string;
					total_given?: number | null;
				};
			};
			feedback: {
				Row: {
					created_at: string | null;
					email: string | null;
					feedback: string | null;
					id: number;
				};
				Insert: {
					created_at?: string | null;
					email?: string | null;
					feedback?: string | null;
					id?: number;
				};
				Update: {
					created_at?: string | null;
					email?: string | null;
					feedback?: string | null;
					id?: number;
				};
			};
			recipients: {
				Row: {
					id: number;
					name: string | null;
					total_recieved: number | null;
				};
				Insert: {
					id?: number;
					name?: string | null;
					total_recieved?: number | null;
				};
				Update: {
					id?: number;
					name?: string | null;
					total_recieved?: number | null;
				};
			};
		};
		Views: {
			[_ in never]: never;
		};
		Functions: {
			get_donor_list: {
				Args: Record<PropertyKey, never>;
				Returns: { donor: string; total: number }[];
			};
			get_donors: {
				Args: Record<PropertyKey, never>;
				Returns: { name: string; total: number }[];
			};
			get_recipients: {
				Args: Record<PropertyKey, never>;
				Returns: { name: string; total: number }[];
			};
			getdonors: {
				Args: Record<PropertyKey, never>;
				Returns: { name: string; total: number }[];
			};
			search: {
				Args: { keyword: string };
				Returns: unknown;
			};
			search_donations:
				| {
						Args: Record<PropertyKey, never>;
						Returns: unknown;
				  }
				| {
						Args: { keyword: string };
						Returns: unknown;
				  };
		};
		Enums: {
			[_ in never]: never;
		};
	};
}
