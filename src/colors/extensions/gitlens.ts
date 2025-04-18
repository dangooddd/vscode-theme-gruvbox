import { ColorScheme, ColorContrast, allColors, withAlpha } from "../../shared";

export const getGitLensColors = (
	scheme: ColorScheme,
	contrast: ColorContrast,
) => {
	const colors = allColors[scheme];
	const {
		bg1,
		bg4,
		grey,
		fg1,
		red1,
		red2,
		green1,
		green2,
		yellow1,
		yellow2,
		blue1,
		blue2,
		purple1,
		purple2,
		aqua1,
		aqua2,
		orange1,
		orange2,
	} = colors;
	const bg0 = colors[`bg0_${contrast}`];

	return {
		"gitlens.closedAutolinkedIssueIconColor": purple1,
		"gitlens.closedPullRequestIconColor": red1,
		"gitDecoration.addedResourceForeground": fg1,
		"gitlens.decorations.branchAheadForegroundColor": green1,
		"gitlens.decorations.branchBehindForegroundColor": orange1,
		"gitlens.decorations.branchDivergedForegroundColor": yellow1,
		"gitlens.decorations.branchMissingUpstreamForegroundColor": red1,
		"gitlens.decorations.statusMergingOrRebasingConflictForegroundColor": red1,
		"gitlens.decorations.statusMergingOrRebasingForegroundColor": yellow1,
		"gitlens.decorations.workspaceCurrentForegroundColor": green1,
		"gitlens.decorations.workspaceRepoMissingForegroundColor": bg4,
		"gitlens.decorations.workspaceRepoOpenForegroundColor": green1,
		"gitlens.decorations.worktreeHasUncommittedChangesForegroundColor": grey,
		"gitlens.decorations.worktreeMissingForegroundColor": red1,
		"gitlens.graphChangesColumnAddedColor": green1,
		"gitlens.graphChangesColumnDeletedColor": red1,
		"gitlens.graphLane1Color": blue2,
		"gitlens.graphLane2Color": blue1,
		"gitlens.graphLane3Color": purple2,
		"gitlens.graphLane4Color": purple1,
		"gitlens.graphLane5Color": aqua2,
		"gitlens.graphLane6Color": aqua1,
		"gitlens.graphLane7Color": yellow2,
		"gitlens.graphLane8Color": yellow1,
		"gitlens.graphLane9Color": green2,
		"gitlens.graphLane10Color": green1,
		"gitlens.graphMinimapMarkerHeadColor": green1,
		"gitlens.graphMinimapMarkerHighlightsColor": green2,
		"gitlens.graphMinimapMarkerLocalBranchesColor": blue2,
		"gitlens.graphMinimapMarkerPullRequestsColor": orange2,
		"gitlens.graphMinimapMarkerRemoteBranchesColor": blue1,
		"gitlens.graphMinimapMarkerStashesColor": purple1,
		"gitlens.graphMinimapMarkerTagsColor": bg4,
		"gitlens.graphMinimapMarkerUpstreamColor": aqua1,
		"gitlens.graphScrollMarkerHeadColor": green2,
		"gitlens.graphScrollMarkerHighlightsColor": yellow1,
		"gitlens.graphScrollMarkerLocalBranchesColor": blue2,
		"gitlens.graphScrollMarkerPullRequestsColor": orange2,
		"gitlens.graphScrollMarkerRemoteBranchesColor": blue1,
		"gitlens.graphScrollMarkerStashesColor": purple1,
		"gitlens.graphScrollMarkerTagsColor": bg4,
		"gitlens.graphScrollMarkerUpstreamColor": aqua2,
		"gitlens.gutterBackgroundColor": bg1,
		"gitlens.gutterForegroundColor": fg1,
		"gitlens.gutterUncommittedForegroundColor": blue1,
		"gitlens.launchpadIndicatorAttentionColor": yellow2,
		"gitlens.launchpadIndicatorAttentionHoverColor": yellow1,
		"gitlens.launchpadIndicatorBlockedColor": red2,
		"gitlens.launchpadIndicatorBlockedHoverColor": red1,
		"gitlens.launchpadIndicatorMergeableColor": green2,
		"gitlens.launchpadIndicatorMergeableHoverColor": green1,
		"gitlens.lineHighlightBackgroundColor": bg1,
		"gitlens.lineHighlightOverviewRulerColor": blue1,
		"gitlens.mergedPullRequestIconColor": purple1,
		"gitlens.openAutolinkedIssueIconColor": green1,
		"gitlens.openPullRequestIconColor": green1,
		"gitlens.trailingLineBackgroundColor": withAlpha(bg0, 160),
		"gitlens.trailingLineForegroundColor": withAlpha(grey, 160),
		"gitlens.unpublishedChangesIconColor": green1,
		"gitlens.unpublishedCommitIconColor": green1,
		"gitlens.unpulledChangesIconColor": orange2,
	};
};
