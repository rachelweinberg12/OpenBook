// Generated via https://supabase.com/docs/guides/api/generating-types#generating-types-using-supabase-cli
export type Json = string | number | boolean | null | { [key: string]: Json } | Json[];

export interface Database {
	donations: {
		Tables: {
			documents: {
				Row: {
					document_id: number;
					url: string | null;
					title: string | null;
					publication_date: string | null;
					modified_date: string | null;
					author: string | null;
					publisher: string | null;
					affected_donors: string | null;
					affected_donees: string | null;
					affected_influencers: string | null;
					document_scope: Database['donations']['Enums']['documents_document_scope'] | null;
					cause_area: string | null;
					notes: string | null;
				};
				Insert: {
					document_id?: number;
					url?: string | null;
					title?: string | null;
					publication_date?: string | null;
					modified_date?: string | null;
					author?: string | null;
					publisher?: string | null;
					affected_donors?: string | null;
					affected_donees?: string | null;
					affected_influencers?: string | null;
					document_scope?: Database['donations']['Enums']['documents_document_scope'] | null;
					cause_area?: string | null;
					notes?: string | null;
				};
				Update: {
					document_id?: number;
					url?: string | null;
					title?: string | null;
					publication_date?: string | null;
					modified_date?: string | null;
					author?: string | null;
					publisher?: string | null;
					affected_donors?: string | null;
					affected_donees?: string | null;
					affected_influencers?: string | null;
					document_scope?: Database['donations']['Enums']['documents_document_scope'] | null;
					cause_area?: string | null;
					notes?: string | null;
				};
			};
			donations: {
				Row: {
					donation_id: number;
					donor: string | null;
					donee: string | null;
					amount: number | null;
					amount_original_currency: number | null;
					original_currency: Database['donations']['Enums']['donations_original_currency'] | null;
					currency_conversion_date: string | null;
					currency_conversion_basis:
						| Database['donations']['Enums']['donations_currency_conversion_basis']
						| null;
					fraction: number | null;
					donation_date: string | null;
					donation_date_precision:
						| Database['donations']['Enums']['donations_donation_date_precision']
						| null;
					donation_date_basis:
						| Database['donations']['Enums']['donations_donation_date_basis']
						| null;
					cause_area: string | null;
					url: string | null;
					donor_cause_area_url: string | null;
					notes: string | null;
					donation_process: string | null;
					intended_use_of_funds_category: string | null;
					intended_use_of_funds: string | null;
					intended_funding_timeframe_in_months: number | null;
					donor_donee_reason: string | null;
					donor_amount_reason: string | null;
					donor_timing_reason: string | null;
					donor_next_donation_thoughts: string | null;
					donor_retrospective: string | null;
					payment_modality: string | null;
					match_eligible: boolean | null;
					goal_amount: number | null;
					influencer: string | null;
					employer_match: number | null;
					matching_employer: string | null;
					special_donation_reason:
						| Database['donations']['Enums']['donations_special_donation_reason']
						| null;
					donation_earmark: string | null;
					affected_countries: string | null;
					affected_states: string | null;
					affected_cities: string | null;
					affected_regions: string | null;
					donation_announcement_date: string | null;
					donation_announcement_date_precision:
						| Database['donations']['Enums']['donations_donation_announcement_date_precision']
						| null;
					donation_announcement_url: string | null;
					predictions: string | null;
					is_contractwork: boolean | null;
				};
				Insert: {
					donation_id?: number;
					donor?: string | null;
					donee?: string | null;
					amount?: number | null;
					amount_original_currency?: number | null;
					original_currency?: Database['donations']['Enums']['donations_original_currency'] | null;
					currency_conversion_date?: string | null;
					currency_conversion_basis?:
						| Database['donations']['Enums']['donations_currency_conversion_basis']
						| null;
					fraction?: number | null;
					donation_date?: string | null;
					donation_date_precision?:
						| Database['donations']['Enums']['donations_donation_date_precision']
						| null;
					donation_date_basis?:
						| Database['donations']['Enums']['donations_donation_date_basis']
						| null;
					cause_area?: string | null;
					url?: string | null;
					donor_cause_area_url?: string | null;
					notes?: string | null;
					donation_process?: string | null;
					intended_use_of_funds_category?: string | null;
					intended_use_of_funds?: string | null;
					intended_funding_timeframe_in_months?: number | null;
					donor_donee_reason?: string | null;
					donor_amount_reason?: string | null;
					donor_timing_reason?: string | null;
					donor_next_donation_thoughts?: string | null;
					donor_retrospective?: string | null;
					payment_modality?: string | null;
					match_eligible?: boolean | null;
					goal_amount?: number | null;
					influencer?: string | null;
					employer_match?: number | null;
					matching_employer?: string | null;
					special_donation_reason?:
						| Database['donations']['Enums']['donations_special_donation_reason']
						| null;
					donation_earmark?: string | null;
					affected_countries?: string | null;
					affected_states?: string | null;
					affected_cities?: string | null;
					affected_regions?: string | null;
					donation_announcement_date?: string | null;
					donation_announcement_date_precision?:
						| Database['donations']['Enums']['donations_donation_announcement_date_precision']
						| null;
					donation_announcement_url?: string | null;
					predictions?: string | null;
					is_contractwork?: boolean | null;
				};
				Update: {
					donation_id?: number;
					donor?: string | null;
					donee?: string | null;
					amount?: number | null;
					amount_original_currency?: number | null;
					original_currency?: Database['donations']['Enums']['donations_original_currency'] | null;
					currency_conversion_date?: string | null;
					currency_conversion_basis?:
						| Database['donations']['Enums']['donations_currency_conversion_basis']
						| null;
					fraction?: number | null;
					donation_date?: string | null;
					donation_date_precision?:
						| Database['donations']['Enums']['donations_donation_date_precision']
						| null;
					donation_date_basis?:
						| Database['donations']['Enums']['donations_donation_date_basis']
						| null;
					cause_area?: string | null;
					url?: string | null;
					donor_cause_area_url?: string | null;
					notes?: string | null;
					donation_process?: string | null;
					intended_use_of_funds_category?: string | null;
					intended_use_of_funds?: string | null;
					intended_funding_timeframe_in_months?: number | null;
					donor_donee_reason?: string | null;
					donor_amount_reason?: string | null;
					donor_timing_reason?: string | null;
					donor_next_donation_thoughts?: string | null;
					donor_retrospective?: string | null;
					payment_modality?: string | null;
					match_eligible?: boolean | null;
					goal_amount?: number | null;
					influencer?: string | null;
					employer_match?: number | null;
					matching_employer?: string | null;
					special_donation_reason?:
						| Database['donations']['Enums']['donations_special_donation_reason']
						| null;
					donation_earmark?: string | null;
					affected_countries?: string | null;
					affected_states?: string | null;
					affected_cities?: string | null;
					affected_regions?: string | null;
					donation_announcement_date?: string | null;
					donation_announcement_date_precision?:
						| Database['donations']['Enums']['donations_donation_announcement_date_precision']
						| null;
					donation_announcement_url?: string | null;
					predictions?: string | null;
					is_contractwork?: boolean | null;
				};
			};
			donees: {
				Row: {
					donee_id: number;
					donee_type: Database['donations']['Enums']['donees_donee_type'] | null;
					donee: string;
					other_names: string | null;
					country: string | null;
					bay_area: boolean | null;
					facebook_username: string | null;
					website: string | null;
					donate_page: string | null;
					donor_list_page: string | null;
					transparency_and_financials_page: string | null;
					donation_case_page: string | null;
					donation_statistics_page: string | null;
					contact_email: string | null;
					twitter_username: string | null;
					eahub_username: string | null;
					wikipedia_page: string | null;
					givewell_review: string | null;
					open_phil_grant_review: string | null;
					ace_review: string | null;
					key_people: string | null;
					cause_area: string | null;
					recommenders: string | null;
					launch_date: string | null;
					launch_date_precision:
						| Database['donations']['Enums']['donees_launch_date_precision']
						| null;
					launch_date_url: string | null;
					notes: string | null;
					youtube_username: string | null;
					instagram_username: string | null;
					tumblr_subdomain: string | null;
					medium_username: string | null;
					pinterest_username: string | null;
					charity_navigator_page: string | null;
					guidestar_page: string | null;
					timelines_wiki_page: string | null;
					autogenerated: boolean | null;
					orgwatch: boolean | null;
				};
				Insert: {
					donee_id?: number;
					donee_type?: Database['donations']['Enums']['donees_donee_type'] | null;
					donee: string;
					other_names?: string | null;
					country?: string | null;
					bay_area?: boolean | null;
					facebook_username?: string | null;
					website?: string | null;
					donate_page?: string | null;
					donor_list_page?: string | null;
					transparency_and_financials_page?: string | null;
					donation_case_page?: string | null;
					donation_statistics_page?: string | null;
					contact_email?: string | null;
					twitter_username?: string | null;
					eahub_username?: string | null;
					wikipedia_page?: string | null;
					givewell_review?: string | null;
					open_phil_grant_review?: string | null;
					ace_review?: string | null;
					key_people?: string | null;
					cause_area?: string | null;
					recommenders?: string | null;
					launch_date?: string | null;
					launch_date_precision?:
						| Database['donations']['Enums']['donees_launch_date_precision']
						| null;
					launch_date_url?: string | null;
					notes?: string | null;
					youtube_username?: string | null;
					instagram_username?: string | null;
					tumblr_subdomain?: string | null;
					medium_username?: string | null;
					pinterest_username?: string | null;
					charity_navigator_page?: string | null;
					guidestar_page?: string | null;
					timelines_wiki_page?: string | null;
					autogenerated?: boolean | null;
					orgwatch?: boolean | null;
				};
				Update: {
					donee_id?: number;
					donee_type?: Database['donations']['Enums']['donees_donee_type'] | null;
					donee?: string;
					other_names?: string | null;
					country?: string | null;
					bay_area?: boolean | null;
					facebook_username?: string | null;
					website?: string | null;
					donate_page?: string | null;
					donor_list_page?: string | null;
					transparency_and_financials_page?: string | null;
					donation_case_page?: string | null;
					donation_statistics_page?: string | null;
					contact_email?: string | null;
					twitter_username?: string | null;
					eahub_username?: string | null;
					wikipedia_page?: string | null;
					givewell_review?: string | null;
					open_phil_grant_review?: string | null;
					ace_review?: string | null;
					key_people?: string | null;
					cause_area?: string | null;
					recommenders?: string | null;
					launch_date?: string | null;
					launch_date_precision?:
						| Database['donations']['Enums']['donees_launch_date_precision']
						| null;
					launch_date_url?: string | null;
					notes?: string | null;
					youtube_username?: string | null;
					instagram_username?: string | null;
					tumblr_subdomain?: string | null;
					medium_username?: string | null;
					pinterest_username?: string | null;
					charity_navigator_page?: string | null;
					guidestar_page?: string | null;
					timelines_wiki_page?: string | null;
					autogenerated?: boolean | null;
					orgwatch?: boolean | null;
				};
			};
		};
		Views: {
			[_ in never]: never;
		};
		Functions: {
			[_ in never]: never;
		};
		Enums: {
			documents_document_scope:
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
				| 'Partnership';
			donations_currency_conversion_basis:
				| 'donor calculation'
				| 'donee calculation'
				| 'Peter Hurford'
				| 'Bloomberg'
				| 'Fixer.io'
				| 'Coindesk'
				| 'Etherscan.io';
			donations_donation_announcement_date_precision: 'day' | 'month' | 'year' | 'multi-year';
			donations_donation_date_basis:
				| 'transaction'
				| 'donation log'
				| 'date of donation announced in announcement'
				| 'date of donation announcement'
				| 'donee contributor list'
				| 'IATI'
				| 'Effective Altruism Survey'
				| 'private communication by donee'
				| 'private communication by donor';
			donations_donation_date_precision: 'day' | 'month' | 'quarter' | 'year' | 'multi-year';
			donations_original_currency:
				| 'AUD'
				| 'BRL'
				| 'BTC'
				| 'CAD'
				| 'CHF'
				| 'CZK'
				| 'DKK'
				| 'ETH'
				| 'EUR'
				| 'GBP'
				| 'INR'
				| 'NOK'
				| 'NZD'
				| 'SEK'
				| 'SGD'
				| 'USD'
				| 'XRP'
				| 'ZAR'
				| 'SHIB'
				| 'AKITA'
				| 'ELON'
				| 'MKR'
				| 'KRW';
			donations_special_donation_reason:
				| 'Giving Game'
				| 'Compensation to charity for effort'
				| 'Committed periodic donation'
				| 'Fundraiser/Gift'
				| 'Hat tip'
				| 'One-off opportunity'
				| 'Offset'
				| 'Prize to charity of choice';
			donees_donee_type: 'Private nonprofit' | 'Donor-advised fund' | 'Subsidiary';
			donees_launch_date_precision: 'day' | 'month' | 'year' | 'multi-year';
		};
	};
}
